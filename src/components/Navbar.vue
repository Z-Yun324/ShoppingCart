<!--HTML-->
<template>
  <div class="navbar flex bg-base-100 shadow-lg">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <PhList :size="32" />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <router-link to="/">
        <a class="btn btn-ghost text-xl">購物車</a>
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end flex">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <PhMagnifyingGlass :size="32" class="" />
      </div>
      <div tabindex="0" role="button" class="btn btn-ghost">
        <PhUser :size="32" />
      </div>
      <router-link to="/cart">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <PhShoppingCart :size="32" /></div
      ></router-link>
    </div>
  </div>
</template>

<!--JS/TS-->
<script setup lang="ts"></script>
