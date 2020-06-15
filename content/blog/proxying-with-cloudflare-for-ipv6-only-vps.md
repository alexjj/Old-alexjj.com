---
title: Proxying with Cloudflare for ipv6 only VPS
date: 2016-09-25
category: Software
tags: vps, nginx, config
summary: How to setup CloudFlare to act as an ipv6 to ipv4 proxy with SSL
---
This setup is used for ipv6 only VPS, like ones from [Lowendspirit](http://lowendspirit.com/). It allows ipv4 clients to connect and it provides SSL from client to server.

##Cloudflare Settings

1. Create AAAA record, and enable cloudflare...the orange cloud.
2. Under Crypto, enable SSL and set certificate to:
   * Full if using a self-signed cert on server - the client never sees it. It's between cloudflare and my server.
   * Full (strict) is using a valid cert on server
3. Under Network, enable ipv6 compatibility
4. Page rules, add one for http://alexjj.com/* to redirect to https

##Server Settings

For nginx.

* Generate SSL certs:

<code>openssl req -new -newkey rsa:2048 -x509 -sha512 -days 3650 -nodes -out /etc/nginx/ssl/name.pem -keyout /etc/nginx/ssl/name.key</code>

Common Name (e.g. server FQDN or YOUR name) [] *.yourdomain.com

* Make this <code>openssl dhparam -out dhparam.pem 2048</code>
* Add Cloudflare IP filter (so the real IPs show in my logs...if I care). This is a nginx module:
    
    cat /etc/nginx/cloudflare

```nginx
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 104.16.0.0/12;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 131.0.72.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 199.27.128.0/21;
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2c0f:f248::/32;
set_real_ip_from 2a06:98c0::/29;
# use any of the following two
real_ip_header CF-Connecting-IP;
#real_ip_header X-Forwarded-For;
```

IPs from [here](https://www.cloudflare.com/ips/).

* Setup nginx virtual host:

Redirect port 80 (maybe redundant if you did page rules above, but good practice if ever move away from cloudflare)

```nginx
##
#Forward http to https
##

server {
        listen [::]:80 default_server;
        server_name alexjj.com www.alexjj.com;
        include cloudflare;
        return 301 https://$host$request_uri;
}
```

The meat:

```nginx
server {
        listen [::]:443 ssl default_server;
        include cloudflare;
        root /var/www/public_html/alexjjcom;

        index index.html;

        server_name alexjj.com www.alexjj.com;

        ssl_certificate /etc/nginx/ssl/alexjj.com.pem;
        ssl_certificate_key /etc/nginx/ssl/alexjj.com.key;
        ssl_dhparam /etc/nginx/ssl/dhparam.pem;

        ssl_session_timeout 5m;
        ssl_session_cache shared:SSL:50m;


        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers "ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECD$
        
        resolver 8.8.8.8;
        ssl_stapling on;
        ssl_trusted_certificate /etc/nginx/ssl/alexjj.com.pem;
        add_header Strict-Transport-Security "max-age=31536000; includeSubdomains;";


        # Website

        location / {
                try_files $uri $uri/ =404;
        }
```

For SSL config try this [gist](https://gist.github.com/plentz/6737338) or Google it as stuff changes.

Enjoy delicious ipv6. <code>dead:beef:babe:cafe:</code>