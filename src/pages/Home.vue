<template>
    <div class="home-wrap">
        <div class="header">country</div>
        <div class="country-wrap">
            <Country />
        </div>
    </div>
</template>

<script>
    import { Country } from '@/components';

    export default {
        components: {
            Country,
        }
    }
</script>