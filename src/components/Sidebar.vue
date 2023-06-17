<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
<div class="overlay"></div>
<div id="wrapper">
    <div id="left-sidebar" class="sidebar">
        <div class="navbar-brand">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">
                    <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
                </svg>
                <span>MALDAVAR</span>
            </RouterLink>
            <button type="button" class="btn-toggle-offcanvas btn btn-sm float-right">
                <i class="lnr lnr-menu icon-close"></i>
            </button>
        </div>
        <div class="sidebar-scroll">
            <div class="user-account">
                <div class="user_div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">
                        <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
                    </svg>
                </div>
                <div class="dropdown">
                    <span>Ali Çağan</span>
                    <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown">
                        <strong>Tesis1</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right account vivify flipInY">
                        <li><a href="page-profile.html"><i class="icon-user"></i>Tesis1</a></li>
                    </ul>
                </div>
            </div>
            <nav id="left-sidebar-nav" class="sidebar-nav">
                <ul id="main-menu" class="metismenu">
                    <li class="active open">
                        <li>
                            <RouterLink to="/">
                                <i class="icon-speedometer"></i>
                                <span>Dashboard</span>
                            </RouterLink>
                        </li>
                    </li>
                    <li class="active open">
                        <a href="#myPage" class="has-arrow">
                            <i class="fa fa-dollar"></i>
                            <span>Satınalma</span>
                        </a>
                        <ul>
                            <li><RouterLink to="/hayvan">Hayvan</RouterLink></li>
                            <li><RouterLink to="/yem">Yem</RouterLink></li>
                            <li><RouterLink to="/sarfMalzeme">Sarf Malzeme</RouterLink></li>
                            <li><RouterLink to="/makineTechizat">Makine/Techizat</RouterLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>
