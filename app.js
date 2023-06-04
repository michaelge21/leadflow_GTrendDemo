const { createApp } = Vue;

createApp({
  data() {
    return {
      input1: "after school programs",
      input2: "dance school",
    };
  },
  methods: {
    search() {
      trends.embed.renderExploreWidget(
        "TIMESERIES",
        {
          comparisonItem: [
            { keyword: this.input1, geo: "501", time: "today 5-y" },
            { keyword: this.input2, geo: "501", time: "today 5-y" },
          ],
          category: 0,
          property: "",
        },
        {
          exploreQuery: `date=today%205-y&geo=501&q=${this.input1},${this.input2}`,
          guestPath: "https://trends.google.com:443/trends/embed/",
        }
      );
    },
  },
  mounted() {
    trends.embed.renderExploreWidget(
      "TIMESERIES",
      {
        comparisonItem: [
          { keyword: this.input1, geo: "501", time: "today 5-y" },
          { keyword: this.input2, geo: "501", time: "today 5-y" },
        ],
        category: 0,
        property: "",
      },
      {
        exploreQuery:
          "date=today%205-y&geo=501&q=after%20school%20programs,dance%20school",
        guestPath: "https://trends.google.com:443/trends/embed/",
      }
    );
  },
}).mount("#app");
