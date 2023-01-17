<template>
    <div class="navbar bg-base-100 p-5">
        <div class="navbar-start">
            <!-- ... -->
        </div>
        <div class="navbar-center">
            <a class="font-bold text-4xl">Currency converter</a>
        </div>
        <div class="navbar-end">
            <div class="nav-item mx-0 mx-lg-1 theme-toggle-btn">
                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#theme-modal">
                    <i class="fas fa-palette"></i>
                </button>
            </div>
            <button class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
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