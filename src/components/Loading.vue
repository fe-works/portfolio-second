<template>
    <div id="loading">

        <div id="logo_wait">
            <img src="@/assets/header_logo/logo_black.svg" alt="logo" />
        </div>

        <div id="loading_anime">
            <span class="loading_movie loading_movie-1" />
            <span class="loading_movie loading_movie-2" />
            <span class="loading_movie loading_movie-3" />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

#loading {
    margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#FFFFFF;
    height:100vh;
    width:100vw;
}

#logo_wait img{
    width:30vw;
    min-width:200px;
    height:auto;
}

#loading_anime {
    display:flex;
    align-items:center;
    justify-content:center;
    
}
.loading_movie {
    display: block;

    width:8px;
    height:8px;

    margin:0 1vw;
    margin-top:20px;

    background-color:#EEF1F2;

    transition: all .6s;
    border-radius:4px
}

.loading_movie-1 {
    animation: change-color1 2.5s linear infinite;
}

.loading_movie-2 {
    animation: change-color2 2.5s linear infinite;
}

.loading_movie-3 {
    animation: change-color3 2.5s linear infinite;
}

@keyframes change-color1 {
    0% {
        background-color:#EEF1F2;
    } 25% {
        background-color: #1A1A1A; 
    } 75% {
        background-color: #1A1A1A; 
    } 100% {
        background-color:#EEF1F2;
    }
}

@keyframes change-color2 {
    25% {
        background-color:#EEF1F2;
    } 50% {
        background-color: #1A1A1A; 
    } 75% {
        background-color: #1A1A1A; 
    } 100% {
        background-color:#EEF1F2;
    }
}

@keyframes change-color3 {
    50% {
        background-color:#EEF1F2;
    } 75% {
        background-color: #1A1A1A; 
    } 75% {
        background-color: #1A1A1A; 
    } 100% {
        background-color:#EEF1F2;
    }
}
</style>


