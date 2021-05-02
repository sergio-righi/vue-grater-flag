<template>
  <img v-if="src" :src="require('flag/' + src + '.svg')" :style="style" />
</template>

<script>
export default {
  name: "g-flag",
  props: {
    value: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      items: [
        { name: "Albania", src: "albania", locale: ["sq"] },
        { name: "Algeria", src: "algeria", locale: ["ar-DZ"] },
        { name: "Angola", src: "angola", locale: ["pt-AO"] },
        { name: "Argentina", src: "argentina", locale: ["es-AR"] },
        { name: "Aruba", src: "aruba", locale: ["nl-AW"] },
        { name: "Australia", src: "australia", locale: ["en-AU"] },
        { name: "Austria", src: "austria", locale: ["de-AT"] },
        { name: "Bahamas", src: "bahamas", locale: ["en-BS"] },
        { name: "Bahrain", src: "bahrain", locale: ["ar-BH"] },
        { name: "Barbados", src: "barbados", locale: ["en-BB"] },
        { name: "Belgium", src: "belgium", locale: ["nl-BE", "fr-BE"] },
        { name: "Belize", src: "belize", locale: ["en-BZ"] },
        { name: "Bhutan", src: "bhutan", locale: ["dz-BT"] },
        { name: "Bolivia", src: "bolivia", locale: ["es-BO"] },
        {
          name: "Bosnia and Herzegovina",
          src: "bosnia-and-herzegovina",
          locale: ["sr-BA"],
        },
        { name: "Brazil", src: "brazil", locale: ["pt-BR"] },
        { name: "Brunei", src: "brunei", locale: ["ms-BN"] },
        {
          name: ["Bulgaria", "Republic of Bulgaria"],
          src: "bulgaria",
          locale: ["bg-BG"],
        },
        { name: "Camerron", src: "cameroon", locale: ["fr-CM"] },
        { name: "Canada", src: "canada", locale: ["en", "en-CA", "fr-CA"] },
        { name: "Cape Verde", src: "cape-verde", locale: ["pt-CV"] },
        { name: "Chile", src: "chile", locale: ["es-CL"] },
        {
          name: ["People's Republic of China", "China"],
          src: "china",
          locale: ["zh-CN"],
        },
        { name: "Colombia", src: "colombia", locale: ["es-CO"] },
        { name: "Costa Rica", src: "costa-rica", locale: ["es-CR"] },
        { name: "Coatia", src: "croatia", locale: ["hr"] },
        { name: "Cuba", src: "cuba", locale: ["es-CU"] },
        { name: "Curacao", src: "curacao", locale: ["nl-CW"] },
        { name: "Cyprus", src: "cyprus", locale: ["el-CY"] },
        {
          name: [
            "Czech Republic",
            "Czechia",
            "Czechoslovak Socialist Republic",
          ],
          src: "czechia",
          locale: ["cs-CZ"],
        },
        { name: "Denmark", src: "denmark", locale: ["da-DK"] },
        { name: "Dominica", src: "dominica", locale: ["en-DM"] },
        {
          name: "Dominican Republic",
          src: "dominican-republic",
          locale: ["es-DO"],
        },
        { name: "Ecuador", src: "ecuador", locale: ["es-EC"] },
        { name: "Egypt", src: "egypt", locale: ["ar-EG"] },
        { name: "England", src: "england", locale: ["en-EN"] },
        { name: "Ethiopia", src: "ethiopia", locale: ["am-ET", "om-ET"] },
        { name: "Finland", src: "finland", locale: ["fi-FI"] },
        { name: "France", src: "france", locale: ["fr-FR"] },
        { name: "Germany", src: "germany", locale: ["de-DE"] },
        { name: "Greece", src: "greece", locale: ["el-GR"] },
        { name: "Guadeloupe", src: "guadeloupe", locale: [] },
        { name: "Guam", src: "guam", locale: ["en-GU"] },
        {
          name: ["British Hong Kong", "Hong Kong"],
          src: "hongkong",
          locale: ["zh-HK"],
        },
        { name: "Hungary", src: "hungary", locale: ["hu-HU"] },
        { name: "Iceland", src: "iceland", locale: ["is-IS"] },
        { name: "India", src: "india", locale: ["en-IN", "hi-IN"] },
        { name: "Indonesia", src: "indonesia", locale: ["in-ID"] },
        { name: "Iran", src: "iran", locale: ["fa-IR"] },
        { name: "Iraq", src: "iraq", locale: ["ar-IQ"] },
        { name: "Ireland", src: "ireland", locale: ["en-IE", "ga-IE"] },
        { name: "Israel", src: "israel", locale: ["iw-IL"] },
        { name: "Italy", src: "italy", locale: ["it-IT"] },
        { name: "Jamaica", src: "jamaica", locale: ["en-JM"] },
        { name: "Japan", src: "japan", locale: ["ja-JP"] },
        { name: "Jordan", src: "jordan", locale: ["ar-JO"] },
        { name: "Kazakhstan", src: "kazakhstan", locale: ["kk-KZ"] },
        { name: "Kenya", src: "kenya", locale: ["en-KE"] },
        { name: "Kosovo", src: "kosovo", locale: ["sq-XK"] },
        { name: "Kuwait", src: "kuwait", locale: ["ar-KW"] },
        { name: "Kyrgyzstan", src: "kyrgyzstan", locale: ["ky-KG", "ru-KG"] },
        { name: "Liechtenstein", src: "liechtenstein", locale: ["de-LI"] },
        { name: "Lithuania", src: "lithuania", locale: ["lt-LT"] },
        { name: "Luxembourg", src: "luxembourg", locale: ["fr-LU", "de-LU"] },
        { name: "Macau", src: "macau", locale: [] },
        { name: "Malaysia", src: "malaysia", locale: ["ms-MY"] },
        { name: "Maldives", src: "maldives", locale: [] },
        { name: "Malta", src: "malta", locale: ["en-MT", "mt-MT"] },
        { name: "Marshall Islands", src: "marshall-islands", locale: [] },
        { name: "Mexico", src: "mexico", locale: ["es-MX"] },
        { name: "Monaco", src: "monaco", locale: ["fr-MC"] },
        { name: "Mongolia", src: "mongolia", locale: ["mn-MN"] },
        { name: "Montenegro", src: "montenegro", locale: ["sr-ME"] },
        { name: "Morocco", src: "morocco", locale: ["ar-MA"] },
        { name: "Mozambique", src: "mozambique", locale: ["pt-MZ"] },
        { name: "Namibia", src: "namibia", locale: ["en-NA"] },
        {
          name: ["Kingdom of the Netherlands", "Netherlands"],
          src: "netherlands",
          locale: ["nl-NL"],
        },
        { name: "Nepal", src: "nepal", locale: ["ne-NP"] },
        { name: "New Zealand", src: "new-zealand", locale: ["en-NZ"] },
        { name: "Nigeria", src: "nigeria", locale: ["ig-NG"] },
        { name: "North Korea", src: "north-korea", locale: ["ko-KP"] },
        { name: "Norway", src: "norway", locale: ["no-NO"] },
        { name: "Oman", src: "oman", locale: ["ar-OM"] },
        { name: "Pakistan", src: "pakistan", locale: ["en-PK", "ur-PK"] },
        { name: "Palau", src: "palau", locale: ["en-PW"] },
        { name: "Plestina", src: "palestina", locale: ["ar-PS"] },
        { name: "Panama", src: "panama", locale: ["es-PA"] },
        { name: "Paraguay", src: "paraguay", locale: ["es-PY"] },
        { name: "Peru", src: "peru", locale: ["es-PE"] },
        { name: "Philippines", src: "philippines", locale: ["en-PH"] },
        { name: "Poland", src: "poland", locale: ["po-PL"] },
        { name: "Portugal", src: "portugal", locale: ["pt-PT"] },
        { name: "Puerto Rico", src: "puerto-rico", locale: ["es-PR"] },
        { name: "Qatar", src: "qatar", locale: ["ar-QA"] },
        { name: "Romania", src: "romania", locale: ["ro-RO"] },
        { name: ["Soviet Union", "Russia"], src: "russia", locale: ["ru-RU"] },
        { name: "Samoa", src: "samoa", locale: ["en-AS"] },
        { name: "San Marino", src: "san-marino", locale: ["it-SM"] },
        { name: "Saudi Arabia", src: "saudi-arabia", locale: ["ar-SA"] },
        { name: "Scotland", src: "scotland", locale: ["gd-GB"] },
        { name: "Senegal", src: "senegal", locale: ["fr-SN"] },
        {
          name: ["Serbia", "Serbia and Montenegro"],
          src: "serbia",
          locale: ["sr-RS"],
        },
        { name: "Singapore", src: "singapore", locale: ["zh-SG", "en-SG"] },
        { name: "Slovakia", src: "slovakia", locale: ["sk-SK"] },
        { name: "Slovenia", src: "slovenia", locale: ["sl-SI"] },
        { name: "South Africa", src: "south-africa", locale: ["en-ZA"] },
        { name: "South Korea", src: "south-korea", locale: ["ko-KR"] },
        { name: "Spain", src: "spain", locale: ["es-ES"] },
        { name: "Sri Lanka", src: "sri-lanka", locale: ["si-LK", "ta-LK"] },
        { name: "St Martin", src: "st-martin", locale: ["fr-MF"] },
        { name: "Sweden", src: "sweden", locale: ["sv-SE"] },
        {
          name: "Switzerland",
          src: "switzerland",
          locale: ["fr-CH", "de-CH", "it-CH"],
        },
        { name: "Taiwan", src: "taiwan", locale: ["zh-TW"] },
        { name: "Tanzania", src: "tanzania", locale: ["en-TZ", "sw-TZ"] },
        { name: "Thailand", src: "thailand", locale: ["th-TH"] },
        {
          name: "Trinidad and Tobago",
          src: "trinidad-and-tobago",
          locale: ["en-TT"],
        },
        { name: "Tunisia", src: "tunisia", locale: ["ar-TN"] },
        { name: "Turkey", src: "turkey", locale: ["tr-TR"] },
        { name: "Turkmenistan", src: "turkmenistan", locale: [] },
        { name: "Uganda", src: "uganda", locale: ["lg-UG"] },
        { name: "Ukraine", src: "ukraine", locale: ["uk-UA"] },
        {
          name: "United Arab Emirates",
          src: "united-arab-emirates",
          locale: ["ar-AE"],
        },
        {
          name: ["United Kingdom", "UK"],
          src: "united-kingdom",
          locale: ["en-GB"],
        },
        {
          name: ["United States of America", "US", "USA"],
          src: "united-states-of-america",
          locale: ["en-US", "es-US"],
        },
        { name: "Uruguay", src: "uruguay", locale: ["es-UY"] },
        { name: "Uzbekistan", src: "uzbekistan", locale: ["uz-UZ"] },
        { name: "Vatican City", src: "vatican-city", locale: ["it-VA"] },
        { name: "Venezuela", src: "venezuela", locale: ["es-VE"] },
        { name: "Vietnam", src: "vietnam", locale: ["vi-VN"] },
        { name: "Wales", src: "wales", locale: ["cy-GB"] },
      ],
    };
  },
  computed: {
    style() {
      return this.size ? { width: this.size } : null;
    },
    src() {
      let item = null;
      if (this.value.match(/[a-z]{2}-[A-Z]{2}/g)) {
        item = this.items.find((item) => item.locale.includes(this.value));
      } else {
        const value = this.normalize(this.value);
        item = this.items.find((item) => {
          if (Array.isArray(item.name)) {
            return item.name.find(
              (subitem) => this.normalize(subitem) === value
            );
          } else {
            return this.normalize(item.name) === value;
          }
        });
      }
      return item ? item.src : null;
    },
  },
  methods: {
    normalize(value) {
      return value
        .toUpperCase()
        .replace(new RegExp("[ÁÀÂÃÄ]", "gi"), "A")
        .replace(new RegExp("[ÉÈÊË]", "gi"), "E")
        .replace(new RegExp("[ÍÌÎÏ]", "gi"), "I")
        .replace(new RegExp("[ÓÒÔÕÖ]", "gi"), "O")
        .replace(new RegExp("[ÚÙÛÜ]", "gi"), "U")
        .replace(new RegExp("[Ç]", "gi"), "C")
        .replace(new RegExp("[Ñ]", "gi"), "N")
        .toLowerCase();
    },
  },
};
</script>
