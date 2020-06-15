<template>
    <nav class="font_white navbar navbar-expand-lg">
        <div class="container">
            <router-link to="/" class="navbar-brand mr-auto">cajan.<span class="font_secondary_color">{{ extension }}</span>{{ charTypeMarker }}</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-lock"></i> CV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blogg</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            extension: 'dev',
            charTypeMarker: "|",
            textTimer: '',
            charTypeMarkerTimer: '',
            counter: 0,

        }
    },
    methods: {
        changeText()  {
            const displayNames = [
                'dev',
                'dev',
                'de',
                'd',
                '',
                '',
                'j',
                'js',
                'j',
                '',
                '',
                'h',
                'ht',
                'htm',
                'html',
                'html',
                'htm',
                'ht',
                'h',
                'h',
                '',
                '',
                'd',
                'de',
            ]
            this.extension = displayNames[this.counter]

            if(this.counter === displayNames.length -1) {
                this.counter = 0
            } else {
                this.counter++
            }

        },
        changeMarker()  {
            if (this.charTypeMarker === "|") {
                this.charTypeMarker = ""
            } else {
                this.charTypeMarker = "|"
            }
        }
    },
    created() {
        this.textTimer = setInterval(this.changeText, 500)
        this.charTypeMarkerTimer = setInterval(this.changeMarker, 400)
        
    }
}
</script>

<style>
    nav {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
    }

    .navbar-brand {
        color: white;
        font-size: 2.5em;
    }

    .navbar-brand:hover {
        color: white;
    }

    .nav-link {
        color: white;
        border-bottom: 4px solid rgb(228, 63, 90, 0);
    }

    .nav-link:hover {
        color: white;
        text-decoration: none;
        border-bottom: 4px solid #e43f5a;
        box-sizing: border-box;
    }
</style>