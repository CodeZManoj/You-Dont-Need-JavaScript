<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Example</title>
  <style>
    header {
      background-color: #1e1e2f;
      color: white;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Arial, sans-serif;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
    }
    nav a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <script>
    // Create header element
    const header = document.createElement("header");

    // Create logo
    const logo = document.createElement("h1");
    logo.textContent = "My Website";

    // Create navigation
    const nav = document.createElement("nav");

    const links = ["Home", "About", "Services", "Contact"];
    links.forEach(text => {
      const a = document.createElement("a");
      a.href = "#" + text.toLowerCase();
      a.textContent = text;
      nav.appendChild(a);
    });

    // Add logo and nav to header
    header.appendChild(logo);
    header.appendChild(nav);

    // Add header to body
    document.body.prepend(header);
  </script>
</body>
</html>
