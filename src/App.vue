<template>
    <div id="app"
         :data-theme="currentTheme"
         class="h-screen"
    >
        <!-- Navbar -->
        <div :class="{'flex-row-reverse' : languages[locale].rtl}"
            class="flex flex-row p-10 bg-base-300">
            <div class="basis-1/4">
                <!-- ... -->
            </div>
            <div class="navbar-center basis-1/2">
                <a class="font-bold text-4xl"><span class="text-primary">{{ $t("app_name_p1") }}</span>
                    {{ $t("app_name_p2") }}</a>
            </div>
            <div :class="languages[locale].rtl ? 'flex flex-row-reverse basis-1/4' : 'flex flex-row basis-1/4'">
                <!-- Theme dropdown -->
                <div :title="$t('change_theme')" :class="languages[locale].rtl ? 'dropdown' : 'dropdown dropdown-end'">
                    <div tabindex="0" :class="languages[locale].rtl ? 'flex flex-row-reverse btn gap-1 normal-case btn-ghost' : 'btn gap-1 normal-case btn-ghost'">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                        <span class="hidden md:inline">{{ $t("theme") }}</span>
                        <svg width="12px" height="12px"
                             class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
                        <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
                            <div v-for="theme in this.themes"
                                 class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                                 :class="{'outline': theme === this.currentTheme}"
                                 :title="$t(`themes.${theme}`)"
                                 :data-set-theme="theme" data-act-class="outline">
                                <div :data-theme="theme"
                                     @click="changeTheme(theme)"
                                     class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                                    <div class="grid grid-cols-5 grid-rows-3">
                                        <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                            <div class="flex-grow text-sm font-bold">{{ $t(`themes.${theme}`) }}</div>
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

                <!-- Language drop-down -->
                <div :title="$t('change_language')" :class="languages[locale].rtl ? 'dropdown' : 'dropdown dropdown-end'">
                    <div tabindex="0" :class="languages[locale].rtl ? 'flex flex-row-reverse btn btn-ghost gap-1 normal-case' : 'btn btn-ghost gap-1 normal-case'">
                        <svg class="inline-block h-4 w-4 fill-current md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg"
                             width="20" height="20" viewBox="0 0 512 512">
                            <path
                                d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                            <path
                                d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
                        </svg>
                        <svg width="12px" height="12px"
                             class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <div
                        class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl">
                        <ul class="menu menu-compact gap-1 p-3" tabindex="0">
                            <li v-for="lang in languages"
                                :title="lang.name"
                                @click="updateLocale(lang.code)">
                                <button :class="locale === lang.code ? 'flex active' : 'flex'"><img loading="lazy" width="20" height="20" :alt="$t(`languages.${lang.code}`)"
                                                                 :src="lang.flag">
                                    <span class="flex flex-1 justify-between">{{ $t(`languages.${lang.code}`) }} </span></button>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- About -->
                <label for="about-modal"
                       :title="$t('about')" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                    </svg>
                </label>

                <!-- Github link -->
                <div :title="$t('visit_my_github')" class="btn btn-ghost btn-circle">
                    <a aria-label="Github" target="_blank"
                       href="https://github.com/omarlamin01/"
                       rel="noopener"
                       class="normal-case">
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
                     class="grid grid-cols-2 rounded rounded-4 outline outline-neutral focus:outline focus:outline-2 focus:outline-offset-4"
                     @click="this.focused_currency = index">
                    <label for="replace-curr-modal"
                           :class="{'order-last' : languages[locale].rtl}"
                           class="flex flex-row items-center justify-center cursor-pointer bg-base-300 p-4 gap-5">
                        <div class="mr-2 grow">
                            <div :class="{'flex-row-reverse' : languages[locale].rtl}"
                                class="flex flex-row items-center">
                                <span class="btn btn-circle btn-ghost hover:btn-error"
                                      v-if="activeCurrencies.length > 1"
                                      @click.stop="removeActiveCurrency(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </span>
                                <span class="flex-1 font-bold text-4xl text-primary"
                                      :title="currency.currency_name">{{ currency.currency_code }}</span>
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
                                   :class="{'text-right' : languages[locale].rtl}"
                                   class="input input-lg w-full focus:outline-none text-xl" placeholder="0.00">
                        </div>
                    </div>
                </div>
                <label for="add-curr-modal"
                       :class="{'flex flex-row-reverse' : languages[locale].rtl}"
                       class="btn btn-square btn-primary grow w-auto h-fit p-4 flex flex-row items-center justify-center text-xl">
                    <div class="flex-start flex-none mr-2"></div>
                    <div class="flex-center flex-1 mr-2">{{ $t('add_btn') }}</div>
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

    <input type="checkbox" id="add-curr-modal" class="modal-toggle"/>
    <label for="add-curr-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <div class="w-auto flex flex-col">
                <label for="add-curr-modal" class="btn btn-ghost w-auto grow"
                       @click="addActiveCurrency(currency)"
                       v-for="currency in allCurrencies">{{ currency.currency_name }}</label>
            </div>
        </label>
    </label>

    <input type="checkbox" id="replace-curr-modal" class="modal-toggle"/>
    <label for="replace-curr-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <div class="w-auto flex flex-col">
                <label for="replace-curr-modal" class="btn btn-ghost w-auto grow"
                       v-for="(currency, index) in allCurrencies"
                       @click="replaceActiveCurrency(index)">{{ currency.currency_name }}</label>
            </div>
        </label>
    </label>

    <input type="checkbox" id="about-modal" class="modal-toggle"/>
    <label for="about-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
            <div class="gap-5">
                <h1 class="text-2xl font-bold">{{ $t('about_header') }}</h1>
                <p class="text-base mr-5 text-xl">
                    {{ $t('about_body.p_one') }}
                    <a href="https://www.exchangerate-api.com/" target="_blank" class="text-info">{{ $t('about_body.p_two') }}</a>.
                    {{ $t('about_body.p_three') }}
                    <a href="https://tailwindcss.com/" target="_blank" class="text-info">{{ $t('about_body.p_four') }}</a>
                    {{ $t('about_body.p_five') }}
                    <a href="https://daisyui.com/" target="_blank" class="text-info">{{ $t('about_body.p_six') }}</a>
                    {{ $t('about_body.p_seven') }}
                </p>
            </div>
        </label>
    </label>
</template>

<script>

import strings from "./assets/strings.json";

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
            focused_currency: 0,
            languages: [],
            locale: '',
        }
    },
    methods: {
        changeTheme(theme) {
            this.currentTheme = theme;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        },

        getDefaultTheme() {
            const theme = localStorage.getItem('theme');
            if (theme) {
                this.currentTheme = theme;
            } else {
                // get OS theme
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                if (darkModeMediaQuery.matches) {
                    this.currentTheme = 'dracula';
                } else {
                    this.currentTheme = 'winter';
                }
            }
        },

        getLocale() {
            const locale = localStorage.getItem('locale') || navigator.language || 'en';
            this.updateLocale(locale);
        },

        updateLocale(locale) {
            this.locale = locale;
            this.$i18n.locale = this.locale;
            localStorage.setItem('locale', this.locale);
        },

        getLanguages() {
            this.languages = strings.languages;
        },

        sortCurrencies() {
            this.allCurrencies.sort((a, b) => {
                if (a.currency_name < b.currency_name) {
                    return -1;
                }
                if (a.currency_name > b.currency_name) {
                    return 1;
                }
                return 0;
            });
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
                                    let name = data['supported_codes'][key];
                                    data.supported_codes.forEach((item, index) => {
                                        if (item[0] === key) {
                                            name = item[1];
                                        }
                                    });
                                    return {
                                        currency_code: key,
                                        currency_name: name,
                                        currency_rate: res.conversion_rates[key],
                                        currency_value: 0.00,
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
            this.sortCurrencies();
            this.addActiveCurrency(this.allCurrencies[0]);
            this.addActiveCurrency(this.allCurrencies[0]);
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
            if (this.activeCurrencies.length > 1) {
                currency.currency_value = (this.activeCurrencies[0].currency_value / this.activeCurrencies[0].currency_rate * currency.currency_rate).toFixed(2);
            }
            this.activeCurrencies.push(currency);
            this.allCurrencies = this.allCurrencies.filter(item => item.currency_code !== currency.currency_code);
            this.sortCurrencies();
        },

        removeActiveCurrency(index) {
            this.allCurrencies.push(this.activeCurrencies[index]);
            this.activeCurrencies = this.activeCurrencies.filter((item, i) => i !== index);
            this.sortCurrencies();
        },

        replaceActiveCurrency(index) {
            this.allCurrencies.push(this.activeCurrencies[this.focused_currency]);
            this.activeCurrencies[this.focused_currency] = this.allCurrencies[index];
            if (this.activeCurrencies.length >= 1) {
                this.activeCurrencies[this.focused_currency].currency_value = (this.activeCurrencies[0].currency_value / this.activeCurrencies[0].currency_rate * this.activeCurrencies[this.focused_currency].currency_rate).toFixed(2);
            }
            this.allCurrencies = this.allCurrencies.filter((item, i) => i !== index);
            this.sortCurrencies();
        },
    },
    created() {
        this.getDefaultTheme();
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.getLocale();
        this.getLanguages();
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
