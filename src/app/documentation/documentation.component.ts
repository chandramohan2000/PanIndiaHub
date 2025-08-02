import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {
  // Navigation/menu state (copied from landing page)
  isMenuOpen: boolean = false;
  activeSection: string = '';

  // For navigation links (same as landing page)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  // Code examples to avoid template interpolation issues
  loginResponseExample = `{
 "home_page": "/desk",
 "full_name": "Administrator",
 "message": "Logged in"
}`;

  logoutResponseExample = `Empty response`;

  userResponseExample = `{
 "message": "Administrator"
}`;

  javascriptExample = `const axios = require('axios');

// Login
const loginResponse = await axios.post('https://your-instance.com/api/method/login', {
  usr: 'Administrator',
  pwd: 'admin'
}, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Store session cookie
const sessionCookie = loginResponse.headers['set-cookie'];

// Make authenticated requests
const userResponse = await axios.get('https://your-instance.com/api/method/frappe.auth.get_logged_user', {
  headers: {
    'Cookie': sessionCookie
  }
});`;

  pythonExample = `import requests

# Login
login_data = {
    'usr': 'Administrator',
    'pwd': 'admin'
}

response = requests.post('https://your-instance.com/api/method/login', 
                        json=login_data,
                        headers={'Accept': 'application/json'})
session_cookies = response.cookies

# Make authenticated requests
user_response = requests.get(
    'https://your-instance.com/api/method/frappe.auth.get_logged_user',
    cookies=session_cookies
)`;
} 