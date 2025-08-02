import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  isMenuOpen: boolean = false;
  currentSlide: number = 0;
  activeSection: string = 'home';

  constructor(private route: ActivatedRoute) {}

  categories: Category[] = [
    { id: 1, name: 'Electronics', icon: 'fas fa-laptop', count: 1250 },
    { id: 2, name: 'Fashion', icon: 'fas fa-tshirt', count: 890 },
    { id: 3, name: 'Home & Garden', icon: 'fas fa-home', count: 650 },
    { id: 4, name: 'Sports', icon: 'fas fa-dumbbell', count: 420 },
    { id: 5, name: 'Books', icon: 'fas fa-book', count: 780 },
    { id: 6, name: 'Beauty', icon: 'fas fa-spa', count: 320 }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 24.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      category: 'Fashion',
      rating: 4.2,
      reviews: 89
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      price: 199.99,
      originalPrice: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.7,
      reviews: 256
    },
    {
      id: 4,
      name: 'Organic Coffee Beans',
      price: 15.99,
      originalPrice: 22.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
      category: 'Food',
      rating: 4.4,
      reviews: 67
    }
  ];

  testimonials = [
    {
      name: 'Priyanka Chopra',
      role: 'Global Actress & Producer',
      content: 'Pan India Hub offers an incredible shopping experience! The quality and variety of products are outstanding. Perfect for someone who values both style and substance.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Rajinikanth',
      role: 'Superstar Actor',
      content: 'The quality of products here is exceptional. Great customer service and competitive pricing. Pan India Hub truly lives up to its name!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Alia Bhatt',
      role: 'Award-winning Actress',
      content: 'I love shopping here for fashion and lifestyle products. The variety and quality are unmatched! Pan India Hub has become my favorite online destination.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  homeTestimonials = [
    {
      name: 'Deepika Padukone',
      location: 'Mumbai, Maharashtra (Bollywood)',
      rating: 5,
      content: 'Pan India Hub has become my go-to destination for all my shopping needs! The quality of products is exceptional and the delivery service is incredibly fast. Perfect for busy professionals like me.',
      purchase: 'Luxury Handbag Collection & Designer Wear',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Allu Arjun',
      location: 'Hyderabad, Telangana (Tollywood)',
      rating: 5,
      content: 'As someone who travels frequently for shoots, I need reliable online shopping. Pan India Hub never disappoints! Great prices and amazing customer service. Highly recommended!',
      purchase: 'Premium Electronics & Fitness Gear',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Vijay',
      location: 'Chennai, Tamil Nadu (Kollywood)',
      rating: 5,
      content: 'Found exactly what I was looking for at unbeatable prices! The return process was smooth when I needed to exchange sizes. Pan India Hub truly understands customer satisfaction.',
      purchase: 'Smart Home Devices & Audio Equipment',
      date: '3 days ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Rashmika Mandanna',
      location: 'Bangalore, Karnataka (Sandalwood)',
      rating: 5,
      content: 'Amazing selection of beauty and fashion products! The delivery was super fast and everything was packaged beautifully. Pan India Hub has exceeded all my expectations!',
      purchase: 'Beauty & Skincare Collection',
      date: '5 days ago',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality
  }

  getDiscountPercentage(originalPrice: number, currentPrice: number): number {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.testimonials.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  ngOnInit(): void {
    this.updateActiveSection();
    // Handle fragment navigation
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => this.scrollToSection(fragment), 100);
      }
    });
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['home', 'categories', 'products', 'about', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }
} 