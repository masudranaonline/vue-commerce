<script setup>
    import CustomerReview from '@/components/CustomerReview.vue'
    import ProductDetails from '@/components/ProductDetails.vue';
    import DeliveryDetails from '@/components/DeliveryDetails.vue';
</script>

<template>



    <!--start product details section-->
    <div class="mx-auto max-w-7xl  bg-white my-4">
        <div class="grid lg:grid-cols-4 gap-2">

            <div class="lg:col-span-3">
               <ProductDetails></ProductDetails>

            </div>

            <div class="">
                <DeliveryDetails></DeliveryDetails>
            </div>
        </div>
    </div>
    <!--end product details section-->

    <!--start product review section-->
   <CustomerReview></CustomerReview>
    <!--end product review section-->






</template>
