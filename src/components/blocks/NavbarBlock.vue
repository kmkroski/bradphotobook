<template>
  <b-navbar toggleable="sm" variant="secondary" type="dark" fixed="top">
    <b-navbar-brand to="/">Brad's Photobook</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/" :exact="true">Home</b-nav-item>
        <b-nav-item to="/contents">Contents</b-nav-item>
        <b-nav-item to="/places">Places</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
