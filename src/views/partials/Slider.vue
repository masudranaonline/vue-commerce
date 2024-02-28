<script setup>
    import Slider from '@/components/Slider.vue';
    import SliderCategories from '@/components/SliderCategories.vue';
</script>

<template>
    <div class="mx-auto max-w-7xl">
        <div class="md:grid grid-cols-4 ">

            <div class="col-span-3 ">
                <Slider></Slider>
            </div>

            <div class="bg-white p-4 mt-4">
                <ul class="divide-y">
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    <SliderCategories></SliderCategories>
                    
                </ul>
            </div>

        </div>
    </div>
</template>
