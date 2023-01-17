<template>
    <div data-theme="lemonade" id="app">
        <!-- the header -->
        <header class="flex p-10">
            <span class="flex-1">
                <h1 class="text-center text-4xl">CURRENCY CONVERTER</h1>
            </span>
            <span class="flex-none">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
                        @click="toggleTheme">Toggle Theme</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full"
                        @click="toggleCurrency">Toggle Currency</button>
            </span>
        </header>
    </div>
</template>

<style scoped>

</style>
