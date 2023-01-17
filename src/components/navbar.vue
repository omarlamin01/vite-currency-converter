<template>
    <!-- Navbar -->
    <div class="navbar bg-base-100 p-5">
        <div class="navbar-start">
            <!-- ... -->
        </div>
        <div class="navbar-center">
            <a class="font-bold text-4xl">Currency converter</a>
        </div>
        <div class="navbar-end">
            <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
                <span class="hidden md:inline">Theme</span>
                <svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Themes modal -->
    <div class="modal fade" id="theme-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change Theme</h5>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="color-themes bg-secondary">
                        <span class="color-element" data-theme="blue" style="background-color: #007bff;"></span>
                        <span class="color-element" data-theme="purple" style="background-color: #6f42c1;"></span>
                        <span class="color-element" data-theme="pink" style="background-color: #e83e8c;"></span>
                        <span class="color-element" data-theme="red" style="background-color: #dc3545;"></span>
                        <span class="color-element" data-theme="orange" style="background-color: #fd7e14;"></span>
                        <span class="color-element active" data-theme="yellow"
                              style="background-color: #ffc107;"></span>
                        <span class="color-element" data-theme="teal" style="background-color: #20c997;"></span>
                    </div>

                    <div class="theme-toggle d-flex justify-content-center align-items-center mt-4 gap-2">
                        <button class="btn btn-outline-secondary dark-mode-btn">
                            <i class="fa-solid fa-moon"></i>
                            <span class="d-none d-md-inline">Dark Mode</span>
                        </button>

                        <button class="btn btn-outline-secondary light-mode-btn">
                            <i class="fa-solid fa-sun"></i>
                            <span class="d-none d-md-inline">Light Mode</span>
                        </button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            // ...
        }
    },
    methods: {
        // ...
    }
}
</script>