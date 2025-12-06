class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .navbar {
                    background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                .nav-link {
                    transition: all 0.2s ease;
                }
                .nav-link:hover {
                    transform: translateY(-2px);
                }
            </style>
            <nav class="navbar text-white py-4 px-6">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="compass" class="w-6 h-6"></i>
                        <span class="text-xl font-bold">AreaFlow</span>
                    </div>
                    <div class="flex space-x-6">
                        <a href="#" class="nav-link flex items-center space-x-1">
                            <i data-feather="home" class="w-5 h-5"></i>
                            <span>Dashboard</span>
                        </a>
                        <a href="#" class="nav-link flex items-center space-x-1">
                            <i data-feather="info" class="w-5 h-5"></i>
                            <span>About</span>
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);