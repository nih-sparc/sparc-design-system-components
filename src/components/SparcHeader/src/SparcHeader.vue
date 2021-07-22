<template>
  <div class="header">
    <div class="header__nav">
      <div class="header__nav--parent">
        <template v-for="item in parentLinks">
          <svgicon :name="item.icon" width="18" height="18" :key="item.icon" />
          <!-- Expect this to be either nuxt-link or router-link -->
          <component
            :is="linkComponent"
            :to="item.href"
            :key="item.displayTitle"
            class="nav5"
          >{{ item.displayTitle }}</component>
        </template>
      </div>
      <div class="header__nav--main">
        <div class="nav-main-container">
          <button class="nav-main-container__mobile-menu" @click="openMobileNav">
            <svgicon name="hamburger" height="25" width="25" />
          </button>
          <div class="logo">
            <component
              :is="linkComponent"
              :to="{ name: 'index' }"
            >
              <!-- Provide a way to slot in the logo -->
              <slot name="logo">
                <sparc-logo />
              </slot>
            </component>
          </div>
          <button
            v-if="shouldShowSearch"
            class="nav-main-container__mobile-search"
            @click="openMobileSearch"
            @enter="executeSearch"
          >
            <svgicon name="magnifyingGlass" height="25" width="25" dir="left" />
          </button>
          <div :class="[searchOpen ? 'search-overlay' : '']">
            <div v-if="searchOpen" class="search-mobile">
              <input type="text" placeholder="Search Datasets" />
              <div class="search-mobile__close" @click="closeMobileSearch">
                x
              </div>
            </div>
          </div>

          <div :class="[menuOpen ? 'overlay' : '']">
            <div class="mobile-navigation" :class="[menuOpen ? 'open' : '']">
              <ul>
                <li v-for="link in links" :key="link.href" style="z-index: 100;">
                  <component
                    :is="linkComponent"
                    :to="link.href"
                    :class="{ active: activeLink(link.href) }"
                    exact-active-class="active"
                  >{{ link.displayTitle }}</component>
                </li>
                <hr class="divider" />
              </ul>
              <ul class="mobile-navigation__links">
                <template v-for="item in parentLinks">
                  <li :key="item.displayTitle" class="nav6">
                    <svgicon :name="item.icon" width="18" height="18"/>
                    <component
                      :is="linkComponent"
                      :to="item.href"
                    >{{ item.displayTitle }}</component>
                  </li>
                </template>
              </ul>
              <div class="mobile-navigation__links--social">
                <a :href="twitterLink" target="_blank">
                  <svgicon icon="social/twitterFull" width="30" height="26" color="#606266" />
                </a>
                <a :href="youtubeLink" target="_blank">
                  <svgicon icon="social/youtubeFull" width="30" height="26" color="#606266" />
                </a>
              </div>
            </div>
          </div>
          <div class="nav-main-container__search">
            <el-input
              v-model="searchQuery"
              type="text"
              class="nav-main-container__search-input"
              placeholder="Search"
              @keyup.native.enter="executeSearch"
            >
              <el-select slot="prepend" v-model="searchSelect">
                <el-option
                  v-for="option in searchSelectOptions"
                  :key="option.key"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </el-input>
            <button class="nav-main-container__search-button" @click="executeSearch">
              <svgicon
                color="white"
                icon="magnifyingGlass"
                height="25"
                width="25"
                dir="left"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SparcLogo from "../../SparcLogo/SparcLogo.vue";

export default {
  name: "SparcHeader",
  props: {
    linkComponent: {
      type: String,
      default: "nuxt-link"
    },
    twitterLink: {
      type: String,
      default: "https://twitter.com/sparc_science"
    },
    youtubeLink: {
      type: String,
      default: "https://www.youtube.com/results?search_query=sparc+nih"
    },
    links: {
      type: Array,
      default: function() { return [
          {
            title: "index",
            displayTitle: "Home",
            href: "/"
          },
          {
            title: "data",
            displayTitle: "Find Data",
            href: "/data?type=dataset"
          },
          {
            title: "resources",
            displayTitle: "Tools & Resources",
            href: `/resources?type=${process.env.ctf_resource_id}`
          },
          {
            title: "maps",
            displayTitle: "Maps",
            href: "/maps"
          },
          {
            title: "news-and-events",
            displayTitle: "News & Events",
            href: "/news-and-events"
          }
        ]
      }
    },
    parentLinks: {
      type: Array,
      default: function() { return [
          {
            displayTitle: "About SPARC",
            icon: "about",
            href: "about"
          },
          {
            displayTitle: "Contact Us",
            icon: "contact",
            href: "/contact-us"
          },
          {
            displayTitle: "Need Help?",
            icon: "help",
            href: "help"
          }
        ] 
      }
    },
    currentPath: {
      type: String,
      default: "/"
    }
  },
  components: {
    SparcLogo
  },
  data: () => ({
    menuOpen: false,
    searchOpen: false,
    searchQuery: "",
    searchSelect: "data",
    searchSelectOptions: [
      {
        key: "data",
        value: "data",
        label: "Datasets"
      },
      {
        key: "resources",
        value: "resources",
        label: "Resources"
      },
      {
        key: "news-and-events",
        value: "news-and-events",
        label: "News and Events"
      },
      {
        key: "help",
        value: "help",
        label: "Support Center"
      }
    ]
  }),

  computed: {
    /**
     * Compute if search should be visible
     * @returns {Boolean}
     */
    shouldShowSearch: function() {
      if (this.$route)
        return this.$route.name !== "data";
      else
        return true
    }
  },

  watch: {
    /**
     * Watches for the route path to hide
     * mobile nav on menu click
     **/
    currentPath: {
      handler: function(val) {
        if (val) {
          this.menuOpen = false;
        }
      },
      immediate: true
    },

    /**
     * Watches menuOpen to check if it's false
     * to enable scrolling
     */
    menuOpen: {
      handler: function(val) {
        if (!val) {
          this.$emit("updateDisabledScrolling", false);
        }
      },
      immediate: true
    }
  },

  methods: {
    /**
     * Sets a link to active based on current page
     * @param {String} query
     */
    activeLink: function(query) {
      if (this.currentPath === query) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * Opens the mobile version of the navigation
     */
    openMobileNav: function() {
      if (!this.menuOpen) {
        this.searchOpen = false; // just in case the search menu is open aconstso
        this.$emit("updateDisabledScrolling", false);
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
        this.$emit("updateDisabledScrolling", false);
      }
    },

    /**
     * Opens the mobile version of the search bar
     */
    openMobileSearch: function() {
      this.searchOpen = true;
      this.menuOpen = false;
      this.$emit("updateDisabledScrolling", false);
    },

    /**
     * Closes the mobile version of the search bar
     */
    closeMobileSearch: function() {
      this.searchOpen = false;
      this.$emit("updateDisabledScrolling", false);
    },

    /**
     * Executes a search query based on selected
     * option and query
     */
    executeSearch: function() {
      const option = this.searchSelectOptions.find(
        o => o.value === this.searchSelect
      );
      const searchKey = option.value === "data" ? "q" : "search";
      const type =
        option.value === "data"
          ? "dataset"
          : option.value === "resources"
          ? "sparcPartners"
          : undefined;

      this.$router.push({
        name: option.value,
        query: {
          type,
          [searchKey]: this.searchQuery
        }
      });

      this.searchQuery = "";
      this.searchSelect = "data";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.nav {
  height: 4em;
  padding: 0;
  padding-top: 1rem;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (min-width: 320px) and (max-width: 1023px) {
    align-items: center;
  }
}
@media (min-width: 320px) and (max-width: 1023px) {
  .overlay {
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

@media (min-width: 320px) and (max-width: 1023px) {
  .search-overlay {
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.25);
  }
}

.divider {
  display: none;
  @media screen and (max-width: 1023px) {
    border: 0;
    clear: both;
    display: block;
    width: 89%;
    background-color: $lightGrey;
    height: 1px;
    margin-left: 0;
    margin-top: 11px;
  }
}

.header__nav {
  background-color: $darkBlue;
  width: 100%;
}

.header__nav--parent {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
  margin-bottom: 8px;
  .svg-icon {
    color: $cochlear;
    padding-right: 0.5rem;
    padding-top: 0.2rem;
  }
  img {
    margin-right: 5px;
  }
  a {
    padding-right: 32px;
    text-decoration: none;
  }
  @media (min-width: 320px) and (max-width: 1023px) {
    & {
      display: none;
    }
  }
}

.header__nav--main {
  height: 82px;
  background-color: $cochlear;
  padding-top: 2rem;
  padding-left: 33px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%), 0 2px 2px 0 rgb(33 43 54 / 20%);
  @media (min-width: 320px) and (max-width: 1023px) {
    height: 41px;
    padding-left: 0;
    padding-top: 9px;
    .nav-main-container__mobile-menu {
      padding-left: 2px;
    }
    box-shadow: none;
  }

  .mobile-navigation__links {
    display: none;
    &--social {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      a {
        font-size: 12px;
        margin-left: 0.5rem;
        line-height:24px;
        font-weight:400;
      }

      &--social {
        display: flex;
        flex-direction: row;
        margin-top: 15rem;
        .svg-icon {
          margin-right: 1rem;
        }
      }
    }
  }

  a {
    color: $app-secondary-color;
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    padding-top: 5px;
    text-decoration: none;
  }
}

.nav-main-container__mobile-search {
  background: none;
  border: none;
  color: #000;
  display: flex;
  outline: none;
  padding-bottom: 1rem;
  cursor: pointer;
  &:hover:not(:active),
  &:focus:not(:active) {
    color: $app-primary-color;
  }
  @media (min-width: 64em) {
    display: none;
  }
}

.nav-main-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 320px) and (max-width: 1023px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%), 0 2px 2px 0 rgb(33 43 54 / 20%);
  }
}

.logo
{
  height: 62px;
  width: 127px;
  white-space: nowrap;
  margin-right: 16px;
  @media (min-width: 320px) and (max-width: 1023px) {
    height: 2rem;
    width: 100%;
    margin-right: 0;
    padding-top: 0.1rem;
  }
}

.nav-main-container__search {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 54%;
  margin-right: 1rem;
  @media (min-width: 320px) and (max-width: 1023px) {
    width: 0;
  }
}

.nav-main-container__search-input {
  width: 30vw;
  height: 34px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
  .el-select {
    width: 150px;
    ::v-deep .el-input--suffix {
      .el-input__inner {
        border-radius: 4px 0px 0px 5px; 
        border: solid 1px $lightGrey;
      }
    }
  }
}

.nav-main-container__search-button {
  background-color: $app-primary-color;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-left: 9px;
  margin-top: 1px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1023px) {
    display: none;
  }
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #909399;
  opacity: 1; /* Firefox */
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  padding-left: 7px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: lightgray;
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  padding-left: 7px;
}

.nav-main-container__mobile-menu {
  background: none;
  border: none;
  color: #000;
  display: none;
  font-size: 24px;
  margin: 0;
  outline: none;
  padding: 10px;
  transform: translate(12px, -8px);
  -webkit-appearance: none;

  &:hover:not(:active),
  &:focus:not(:active) {
    color: $app-primary-color;
  }

  @media screen and (max-width: 1023px) {
    & {
      display: block;
    }
  }
}

.mobile-navigation {
  padding: 0px;
  height: 100%;
  margin-left: 1rem;
  width: 120%;
  ul {
    padding-left: 0;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      display: inline;
      padding-right: 5rem;
      @media screen and (min-width: 1023px) {
        padding-right: 0.5rem;
      }

      a {
        text-decoration: none;
        color: $darkBlue;
        padding-bottom: 0.2rem;
        font-weight: 500;

        &.active,
        &:hover,
        &:focus {
          border-bottom: 2px solid $app-primary-color;
          color: $app-primary-color;
        }
      }
    }

    @media (min-width: 320px) and (max-width: 1023px) {
      a {
        font-size: 14px;
        font-weight: 300;
        line-height: 32px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    & {
      background: $background;
      bottom: 0;
      display: none;
      flex-direction: column;
      left: 0;
      padding: 1em;
      position: fixed;
      right: 6rem;
      top: 3.4rem;
      z-index: 9999;
      &.open {
        display: flex;
        margin-left: 0;
        margin-right: 1rem;
        width: 14rem;
        overflow: auto;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      li {
        margin: 0.25rem 0;
      }
    }
  }
}

.search-mobile {
  display: none;
}

@media (min-width: 320px) and (max-width: 1023px) {
  .search-mobile {
    background-color: $cochlear;
    flex-direction: column;
    left: 0;
    position: fixed;
    right: 6rem;
    top: 3.4rem;
    z-index: 9999;
    display: flex;
    width: 100%;
    height: 3rem;
    line-height:3rem;
    padding-left:1rem;
    border-top: solid 1px lightgray;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%), 0 2px 2px 0 rgb(33 43 54 / 20%);

    &__close {
      width: 27px;
      height: 3rem;
      position: inherit;
      right: 0.8rem;
      line-height:3rem;
      cursor: pointer;
    }

    &--icon {
      color: $neutralGrey;
      width: 20px;
      height: 20px;
    }

    input {
      height: 100%;
      font-size: 16px;
      width: 90%;
      border:none;
      &:focus-visible {
        outline:none;
      }
    }
  }

  input {
    height: 2rem;
    font-size: 16px;
    width: 90%;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: lightgrey;
    opacity: 1; /* Firefox */
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    padding-left: 7px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: lightgrey;
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    padding-left: 7px;
  }
}

.data-portal-title {
  font-size: 14px;
  color: #303133;
  line-height: 14px;
  position: relative;
  bottom: 5px;
  margin-left: 5px;
  user-select: none;
}
</style>
