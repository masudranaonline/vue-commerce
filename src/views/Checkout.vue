<script setup></script>

<template>
    <div class="mx-auto max-w-7xl my-4 px-1">
        <div class="grid md:grid-cols-4 gap-2">
            <div class="md:col-span-3 ">

                <!--  !Address add -->
                <div data-modal-target="default-modal" data-modal-toggle="default-modal"
                    class="bg-white flex justify-center items-center py-6 rounded-sm shadow-md cursor-pointer">
                    <a href="#" class="flex justify-start items-center text-base font-medium text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Address
                    </a>
                </div>
                <!-- Add Address modal -->
                <!-- Main modal -->
                <div id="default-modal" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Add New Delivery Address
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 md:p-5 space-y-4">
                                <!-- Modal body -->
                                
                                    <form action="">
                                        <div class="grid md:grid-cols-2 gap-4">
                                            <div class="">
                                                <div class="mb-6">
                                                    <label for="full-name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                                        Name</label>
                                                    <input type="text" id="name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Input Full Name" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="number"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile
                                                        number</label>
                                                    <input type="number" id="number"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Input Full Name" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="number"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                                                    <select id="countries"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option selected>Choose a country</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>
                                                </div>
                                                <div class="mb-6">
                                                    <label for="number"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                                    <select id="countries"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option selected>Choose a country</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>
                                                </div>
                                                <div class="mb-6">
                                                    <label for="number"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                                                    <select id="countries"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option selected>Choose a country</option>
                                                        <option value="US">United States</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="FR">France</option>
                                                        <option value="DE">Germany</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="">
                                                <div class="mb-6">
                                                    <label for="full-name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                    <input type="text" id="name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Input Full Name" required />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="full-name"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        <div class="mb-6">
                                                            <label for="full-name"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                                            <input type="text" id="name"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Input Full Name" required />
                                                        </div>
                                                    </label>
                                                    <input type="text" id="name"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Input Full Name" required />
                                                </div>
                                                <div class="">
                                                    <p>Select a label for effective delivery:</p>
                                                    <div class="flex justify-between space-x-4 py-2">
                                                        <button
                                                            class="border w-1/2 py-2 text-base shadow-sm hover:shadow-md rounded-sm">Home</button>
                                                        <button
                                                            class="border w-1/2 py-2 text-base shadow-sm hover:shadow-md rounded-sm">Office</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="default-modal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>

                <!--  !Address added -->
                <div class="bg-white py-6 px-4 my-4 shadow-md">
                    <p class="text-xs font-medium ">Deliver to: Md Razu Ahamed</p>
                    <div class="md:flex items-center space-x-2 text-sm py-4">
                        <h4 class="border bg-gray-200 text-gray-500 px-2 py-1 rounded-sm">Home</h4>
                        <p class="border-r px-2 text-gray-700">1975483170</p>
                        <p class="text-gray-700">বৈকালী পালপাড়া দারোরার মোড়, রুস্তম মিয়া মসজিদের গেটার
                            সামনে, Khulna
                            G.P.O, Khulna - Town, Khulna</p>
                        <span class="text-blue-500 font bold cursor-pointer text-xs">Change</span>
                    </div>
                    <div class="border-2 rounded-sm p-4 text-sm text-gray-600">
                        <h6>Collect your parcel from the nearest Daraz Pick-up Point with a reduced shipping
                            fee</h6>
                        <p>8 suggested collection point(s) nearb <span class="text-blue-500 cursor-pointer">Check
                                Pick-up Points</span></p>
                    </div>
                    <div class="flex space-x-4 pt-4 text-xs md:text-sm text-gray-700">
                        <p>Bill to the same address</p>
                        <a href="#" class="text-blue-500">Edit</a>
                    </div>
                    <div class="flex space-x-4 text-xs md:text-sm text-gray-700">
                        <p>Email to <span>masudranaonline75@gmail.com</span></p>
                        <a href="#" class="text-blue-500">Edit</a>
                    </div>
                </div>

                <!-- Product Details -->
                <div class="bg-white p-1 md:p-4 shadow-md">
                    <div class="border-b-2 divide-y-2 border-[#ffab1f]">
                        <div class="flex justify-between  items-center  py-4">
                            <div class="flex justify-start items-center space-x-3 w-2/3">
                                <img class="w-20 h-20" src="../../public/Images/short1.webp" alt="">
                                <div class="">
                                    <p class="text-xs md:text-sm text-gray-700 font-medium"> Xiaomi Mi
                                        Boost Electric
                                        Hair Clipper
                                        and Beard Trimmer - Black</p>
                                    <small class="text-2xs md:text-xs text-gray-400">Enchen,Color
                                        Family:Black</small>
                                </div>
                            </div>
                            <div class="">
                                <span class="text-gray-500">Qty:1</span>
                            </div>
                            <div class="font-medium text-base text-slate-600">
                                <span>৳ 1,239</span>
                            </div>
                        </div>

                        <div class="flex justify-between  items-center  py-4">
                            <div class="flex justify-start items-center space-x-3 w-2/3">
                                <img class="w-20 h-20" src="../../public/Images/short1.webp" alt="">
                                <div class="">
                                    <p class="text-xs md:text-sm text-gray-700 font-medium"> Xiaomi Mi
                                        Boost Electric
                                        Hair Clipper
                                        and Beard Trimmer - Black</p>
                                    <small class="text-2xs md:text-xs text-gray-400">Enchen,Color
                                        Family:Black</small>
                                </div>
                            </div>
                            <div class="">
                                <span class="text-gray-500">Qty:1</span>
                            </div>
                            <div class="font-medium text-base text-slate-600">
                                <span>৳ 1,239</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-end py-2">
                        <p text-base>1 Item(s). Subtotal:৳ <span class="text-red-600 font-semibold">1,314</span></p>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="bg-white p-4 shadow-md">
                    <p class="text-base font-medium text-gray-400">Discount and Payment</p>
                    <div class="border-b py-4">
                        <div class="flex justify-between">
                            <div class="flex justify-start items-center space-x-2 pb-1">
                                <img src="../../public/Images/voucher.png" class="h-4 w-4" alt="">
                                <span class="text-xs">Daraz Voucher</span>
                            </div>
                            <p class="text-xs font-medium"> No Applicable Voucher</p>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex justify-start items-center space-x-2">
                                <img src="../../public/Images/promo.png" class="h-4 w-4" alt="">
                                <span class="text-xs">Daraz Voucher</span>
                            </div>
                            <p
                                class="flex justify-start items-center text-xs font-medium text-gray-400 cursor-pointer">
                                No Applicable Voucher<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div class="py-4">
                        <span class="text-base font-semibold text-slate-800">Order Summary</span>
                        <div class="flex justify-between">
                            <p class="text-sm text-slate-700">Items Total</p>
                            <span class="text-red-500 font-medium text-base">৳ 1,239</span>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-sm text-slate-700">Items Total</p>
                            <span class="text-red-500 font-medium text-base">৳ 1,239</span>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-sm text-slate-700">Items Total</p>
                            <span class="text-red-500 font-medium text-base">৳ 1,239</span>
                        </div>
                        <p class="text-xs text-end text-gray-400 py-2">VAT included, where applicable</p>
                        <button class="bg-red-400 w-full py-1.5 text-white rounded-full">Place
                            Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
