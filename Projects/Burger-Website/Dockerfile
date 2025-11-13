# Use lightweight Nginx base image
FROM nginx:alpine

# Clear default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy all website files (index.html, css, js, img folder) to Nginx directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/

# Fix permissions (ensure files are readable)
RUN chmod -R 755 /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

