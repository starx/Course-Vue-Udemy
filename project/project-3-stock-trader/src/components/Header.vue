<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      <button
        class="navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link
            tag="li"
            class="nav-item"
            activeClass="active"
            to="/portfolio">
            <a class="nav-link">
              Portfolio
              <sr-only-current expectedRouteName="portfolio"></sr-only-current>
            </a>
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            activeClass="active"
            to="/stocks">
            <a class="nav-link">
              Stocks
              <sr-only-current expectedRouteName="stocks"></sr-only-current>
            </a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#">
              End day
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Save / Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save data</a>
              <a class="dropdown-item" href="#">Load data</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import srOnlyCurrent from '@/components/bootstrap/components/navbar/sr-only-current.vue';

export default {
  components: {
    srOnlyCurrent,
  },
};
</script>
