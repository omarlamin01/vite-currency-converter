<template>
    <div id="app"
         :data-theme="currentTheme"
         class="h-screen"
    >
        <!-- Navbar -->
        <div class="navbar p-10 bg-base-300">
            <div class="navbar-start">
                <!-- ... -->
            </div>
            <div class="navbar-center">
                <a class="font-bold text-4xl"><span class="text-primary">Currency</span> converter</a>
            </div>
            <div class="navbar-end">
                <!-- Theme dropdown -->
                <div title="Change Theme" class="dropdown dropdown-end ">
                    <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                        <span class="hidden md:inline">Theme</span>
                        <svg width="12px" height="12px"
                             class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <div
                        class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                        <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
                            <div v-for="theme in this.themes"
                                 class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                 :class="{'outline': theme === this.currentTheme}"
                                 :title="theme"
                                 :data-set-theme="theme" data-act-class="outline">
                                <div :data-theme="theme"
                                     @click="changeTheme(theme)"
                                     class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                    <div class="grid grid-cols-5 grid-rows-3">
                                        <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                            <div class="flex-grow text-sm font-bold">{{ theme }}</div>
                                            <div class="flex flex-shrink-0 flex-wrap gap-1">
                                                <div class="bg-primary w-2 rounded"></div>
                                                <div class="bg-secondary w-2 rounded"></div>
                                                <div class="bg-accent w-2 rounded"></div>
                                                <div class="bg-neutral w-2 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- About -->
                <button title="About" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                    </svg>
                </button>

                <!-- Github link -->
                <div title="Source code" class="flex-none items-center">
                    <a aria-label="Github" target="_blank"
                       href="https://github.com/omarlamin01/vite-currency-converter"
                       rel="noopener"
                       class="btn btn-ghost btn-circle normal-case">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             class="inline-block h-5 w-5 fill-current md:h-6 md:w-6">
                            <path
                                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <main class="flex flex-col items-center justify-center p-10">
            <div class="flex flex-col gap-5 p-5">
                <div v-for="(currency, index) in activeCurrencies" :key="index"
                     class="grid grid-cols-2 rounded rounded-4 outline outline-neutral focus:outline focus:outline-2 focus:outline-offset-4">
                    <label for="my-modal-4"
                           class="flex flex-row items-center justify-center cursor-pointer bg-base-300 p-4 gap-5">
                        <div class="mr-2 grow">
                            <div class="flex flex-row items-center">
                                <span class="flex-1 font-bold text-4xl text-primary">{{ currency.currency_code }}</span>
                                <span class="flex-none">
                                    <svg width="12px" height="12px"
                                         class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </label>
                    <div class="flex items-center justify-center cursor-text p-0">
                        <div>
                            <input v-model="currency.currency_value" @change="exchangeCurrency(index)" type="text"
                                   class="input w-full focus:outline-none text-xl" placeholder="0.00">
                        </div>
                    </div>
                </div>
                <label for="my-modal-4"
                       class="btn btn-square btn-primary grow w-auto h-fit p-4 flex flex-row items-center justify-center text-xl">
                    <div class="flex-start flex-none mr-2"></div>
                    <div class="flex-center flex-1 mr-2">ADD</div>
                    <div class="flex-end flex-none mr-2">
                        <svg width="12px" height="12px"
                             class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                </label>
            </div>
        </main>
    </div>
    <input type="checkbox" id="my-modal-4" class="modal-toggle"/>
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                free!</p>
        </label>
    </label>
</template>

<script>

export default {
    name: "App",
    components: {
        // ...
    },
    data() {
        return {
            currentTheme: 'winter',
            themes: [
                'light',
                'dark',
                'cupcake',
                'bumblebee',
                'emerald',
                'corporate',
                'synthwave',
                'retro',
                'cyberpunk',
                'valentine',
                'halloween',
                'garden',
                'forest',
                'aqua',
                'lofi',
                'pastel',
                'fantasy',
                'wireframe',
                'black',
                'luxury',
                'dracula',
                'cmyk',
                'autumn',
                'business',
                'acid',
                'lemonade',
                'night',
                'coffee',
                'winter',
            ],
            allCurrencies: [],
            activeCurrencies: [],
            api_key: 'd57569bf593ebb534d9227a5',
            base_code: 'USD',
            rates: [],
        }
    },
    methods: {
        changeTheme(theme) {
            this.currentTheme = theme;
            document.documentElement.setAttribute('data-theme', theme);
        },

        updateData() {
            fetch(`https://v6.exchangerate-api.com/v6/${this.api_key}/latest/${this.base_code}`)
                .then(res => res.json())
                .then(res => {
                    fetch(`https://v6.exchangerate-api.com/v6/${this.api_key}/codes`)
                        .then(data => data.json())
                        .then(data => {
                            let obj = {
                                LAST_UPDATE: res['time_last_update_utc'],
                                BASE_CODE: this.base_code,
                                RATES: res.conversion_rates,
                                CURRENCIES: Object.keys(res.conversion_rates).map((key, index) => {
                                    return {
                                        currency_code: key,
                                        currency_country: data.supported_codes[index],
                                        currency_rate: res.conversion_rates[key],
                                        currency_value: (0).toFixed(2),
                                    }
                                })
                            };

                            let jsonContent = JSON.stringify(obj);

                            localStorage.setItem("data", jsonContent);
                        })
                })
        },

        getData() {
            localStorage.getItem('data') ? this.allCurrencies = JSON.parse(localStorage.getItem('data')).CURRENCIES : this.updateData();
            this.activeCurrencies = this.allCurrencies.slice(0, 2);
        },

        exchangeCurrency(p_index) {
            this.activeCurrencies[p_index].currency_value = parseFloat(this.activeCurrencies[p_index].currency_value).toFixed(2);
            let current_value = this.activeCurrencies[p_index].currency_value / this.activeCurrencies[p_index].currency_rate;
            this.activeCurrencies.forEach((currency, c_index) => {
                if (c_index != p_index) {
                    currency.currency_value = (current_value * currency.currency_rate).toFixed(2);
                }
            })
        },

        addActiveCurrency(currency) {
            let currency_name = currency[0];
            let currency_country = currency[1];
            let currency_rate = this.rates[currency[0]];
            let currency_value = 0;

            if (this.activeCurrencies.length > 1) {
                currency_value = this.activeCurrencies[0].currency_value / this.activeCurrencies[0].currency_rate * currency_rate;
            }

            let currency_obj = {
                currency_name: currency_name,
                currency_country: currency_country,
                currency_rate: currency_rate,
                currency_value: currency_value
            };
            console.log(currency_obj);
            this.activeCurrencies.push(currency_obj);
        },
    },
    mounted() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateData();
        this.getData();
    },
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    }
}
</script>

<style scoped>
#app {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
