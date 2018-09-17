<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Financie</router-link>
      <button
                                        class="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarNav"
                                        aria-controls="navbarNav"
                                        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
            <a class="nav-link">Summary</a>
          </router-link>
          <router-link tag="li" to="/add" active-class="active" class="nav-item">
            <a class="nav-link">Add</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>
