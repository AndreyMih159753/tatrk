<script setup>
const isClicked = ref(false);

const bntNavClicked = () => {
    isClicked.value = !isClicked.value;
}
</script>

<template>
    <div class="relative z-200 max-w-[1140px] mx-auto px-4.5 max-[700px]:text-center" :class="{
        clicked: isClicked
    }">
        <div
            class="inline-block mt-[45px] relative z-100 transition-all ease-in-out delay-[1ms] hover:transform-[scale(1.1)] max-[1175px]:transform-[scale(0.85)] max-[1175px]:mt-7.5 max-[700px]:z-10 max-[700px]:transform-none">
            <NuxtLink to="/">
                <img src="../assets/images/Logo.webp" alt="Logo">
            </NuxtLink>
        </div>
        <div
            class="nav-menus max-[700px]:fixed max-[700px]:opacity-0 max-[700px]:top-0 max-[700px]:left-0 max-[700px]:right-0 max-[700px]:bottom-full max-[700px]:px-[15px] max-[700px]:pt-[75px] max-[700px]:bg-[#ffffffe6] max-[700px]:z-900 max-[700px]:overflow-hidden">
            <div
                class="absolute top-[95px] right-0 left-50 p-0 max-[700px]:relative max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-0 max-[700px]:bottom-0 max-[700px]:m-0 max-[700px]:p-0 max-[700px]:h-[76%]">
                <nav class="h-full">
                    <ul
                        class="nav flex rounded-[90px] ml-[-55px] mr-4.5 pl-[60px] pb-0.5 max-[1175px]:pl-[35px] max-[700px]:p-0 max-[700px]:m-0 max-[700px]:w-full max-[700px]:bg-transparent max-[700px]:flex-wrap max-[700px]:h-full max-[700px]:justify-center max-[700px]:content-start">
                        <li
                            class="w-[332px] h-25 px-[15px] ml-[-100px] bg-[#FCAF1A] bg-linear-90 from-[#FCAF1A] from-25% to-[#F6E251] [box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)] rounded-[50px] relative z-10 max-[1175px]:h-[75px] max-[1175px]:w-[39%] max-[1175px]:ml-[-14.1%] max-[1175px]:px-0 max-[700px]:w-[41%] max-[700px]:h-[30%] max-[700px]:mx-2 max-[700px]:my-[2.5%] max-[700px]:rounded-[15px]">
                            <NuxtLink to="/friends">
                                <div class="pl-[65px] max-[700px]:h-full">
                                    <div class="flex justify-center mt-2.5 mb-[5px] max-[700px]:h-full max-[700px]:absolute max-[700px]:top-[20%]">
                                        <img src="../assets/images/Friends_(Icon).webp" alt="Friends (Icon)"
                                            class="h-[46px] max-[1175px]:h-12.5 max-[1175px]:ml-[35%] max-[1175px]:mr-[20%] max-[700px]:m-0 max-[700px]:h-[40%] max-[700px]:mb-[2%]">
                                    </div>
                                    <div>
                                        <span
                                            class="flex justify-center text-[28px] text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] leading-6.5 max-[1175px]:hidden max-[700px]:block max-[700px]:absolute max-[700px]:bottom-[5%] max-[700px]:w-full"
                                            style="font-family: 'FrankfurterB';">
                                            Friends
                                        </span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li
                            class="w-[332px] h-25 px-[15px] bg-[#00A4DE] bg-linear-90 from-[#00A4DE] from-26% to-[#89C4E9] [box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)] ml-[-100px] rounded-[50px] relative z-9 max-[1175px]:h-[75px] max-[1175px]:w-[39%] max-[1175px]:ml-[-14.1%] max-[1175px]:px-0 max-[700px]:w-[41%] max-[700px]:h-[30%] max-[700px]:mx-2 max-[700px]:my-[2.5%] max-[700px]:rounded-[15px]">
                            <NuxtLink to="/activities">
                                <div class="pl-[65px]">
                                    <div class="flex justify-center mt-2.5 mb-[5px]">
                                        <img src="../assets/images/Activities_(Icon).webp" alt="Activities (Icon)"
                                            class="h-[46px] max-[1175px]:h-12.5 max-[1175px]:ml-[100.219px] max-[1175px]:mr-[57.2656px]">
                                    </div>
                                    <div>
                                        <span
                                            class="flex justify-center text-[28px] text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] leading-6.5 max-[1175px]:hidden"
                                            style="font-family: 'FrankfurterB';">
                                            Activities
                                        </span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li
                            class="w-[332px] h-25 px-[15px] bg-[#EE5799] bg-linear-90 from-[#EE5799] from-29% to-[#F496BE] [box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)] ml-[-100px]  rounded-[50px] relative z-8 max-[1175px]:h-[75px] max-[1175px]:w-[39%] max-[1175px]:ml-[-14.1%] max-[1175px]:px-0 max-[700px]:w-[41%] max-[700px]:h-[30%] max-[700px]:mx-2 max-[700px]:my-[2.5%] max-[700px]:rounded-[15px]">
                            <NuxtLink to="/watch">
                                <div class="pl-[65px]">
                                    <div class="flex justify-center mt-2.5 mb-[5px]">
                                        <img src="../assets/images/Watch_(Icon).webp" alt="Watch (Icon)"
                                            class="h-[46px] max-[1175px]:h-12.5 max-[1175px]:ml-[100.219px] max-[1175px]:mr-[57.2656px]">
                                    </div>
                                    <div>
                                        <span
                                            class="flex justify-center text-[28px] text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] leading-6.5 max-[1175px]:hidden"
                                            style="font-family: 'FrankfurterB';">
                                            Watch
                                        </span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li
                            class="w-[332px] h-25 px-[15px] bg-[#421A67] bg-linear-90 from-[#6F6BA0] from-30% to-[#7F4FC6] [box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)] ml-[-100px] rounded-[50px] relative z-7 max-[1175px]:h-[75px] max-[1175px]:w-[39%] max-[1175px]:ml-[-14.1%] max-[1175px]:px-0 max-[700px]:w-[41%] max-[700px]:h-[30%] max-[700px]:mx-2 max-[700px]:my-[2.5%] max-[700px]:rounded-[15px]">
                            <NuxtLink to="/play">
                                <div class="pl-[65px]">
                                    <div class="flex justify-center mt-2.5 mb-[5px]">
                                        <img src="../assets/images/Play_(Icon).webp" alt="Play (Icon)"
                                            class="h-[46px] max-[1175px]:h-12.5 max-[1175px]:ml-[100.219px] max-[1175px]:mr-[57.2656px]">
                                    </div>
                                    <div>
                                        <span
                                            class="flex justify-center text-[28px] text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] leading-6.5 max-[1175px]:hidden"
                                            style="font-family: 'FrankfurterB';">
                                            Play
                                        </span>
                                    </div>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                class="absolute items-center top-[25px] right-[18px] z-90 max-[700px]:relative max-[700px]:left-0 max-[700px]:right-0 max-[700px]:top-0 max-[700px]:bottom-0 max-[700px]:m-0 max-[700px]:p-0 max-[700px]:h-[24%]">
                <div
                    class="nav-social float-right ml-[60px] max-[1175px]:ml-[25px] max-[700px]:float-none max-[700px]:fixed max-[700px]:top-[-140px] max-[700px]:transition-[top] max-[700px]:duration-[0.4s]">
                    <ul class="flex gap-5 max-[1175px]:gap-[15px]">
                        <li class="my-[3px]">
                            <NuxtLink to="https://www.facebook.com/pg/trueandtherainbowkingdom/">
                                <div class="bg-[#7F53C3] rounded-[100px] text-center size-11">
                                    <span class="text-[25px] leading-[41px] text-white">
                                        <i class="fa fa-facebook"></i>
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="my-[3px]">
                            <NuxtLink to="https://www.instagram.com/trueandtherainbowkingdom/">
                                <div class="bg-[#7F53C3] rounded-[100px] text-center size-11">
                                    <span class="text-[25px] leading-[41px] text-white">
                                        <i class="fa fa-instagram"></i>
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="my-[3px]">
                            <NuxtLink to="https://www.youtube.com/channel/UCKifwRFflNhWbl1821nm_sg">
                                <div class="bg-[#7F53C3] rounded-[100px] text-center size-11">
                                    <span class="text-[25px] leading-[41px] text-white">
                                        <i class="fa fa-youtube-play"></i>
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="mr-2.5 my-[3px]">
                            <NuxtLink to="https://twitter.com/TrueAndBartleby">
                                <div class="bg-[#7F53C3] rounded-[100px] text-center size-11">
                                    <span class="text-[25px] leading-[41px] text-white">
                                        <i class="fa fa-twitter"></i>
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="float-right max-[700px]:float-none max-[700px]:w-full max-[700px]:h-full">
                    <ul class="flex gap-5 max-[700px]:h-full max-[700px]:gap-4 max-[700px]:justify-center">
                        <li class="max-[700px]:w-[40%] max-[700px]:h-[60%]">
                            <NuxtLink to="/parents">
                                <div class="hidden max-[700px]:block max-[700px]:absolute max-[700px]:top-[3%] max-[700px]:mb-[3%] max-[700px]:h-[40%] max-[700px]:w-full">
                                    <img src="../assets/images/Parents_(Icon).png" alt="Parents (Icon)">
                                </div>
                                <div
                                    class="w-40 h-12.5 bg-[#7F53C3] rounded-[100px] max-[1175px]:w-[145px] max-[1175px]:h-11 max-[1175px]:my-[3px] max-[700px]:w-auto max-[700px]:h-full max-[700px]:rounded-[15px] max-[700px]:bg-[#0A93D2] max-[700px]:bg-linear-90 max-[700px]:from-[#167AEA] max-[700px]:from-30% max-[700px]:to-[#0A93D2] max-[700px]:to-100% max-[700px]:[box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)]">
                                    <span
                                        class="flex justify-center uppercase text-white text-[26px] leading-[55px] max-[1175px]:text-[22px] max-[1175px]:leading-[47px] max-[700px]:[text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] max-[700px]:text-[18px]"
                                        style="font-family: 'FrankfurterM';">
                                        Parents
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                        <li class="max-[700px]:w-[40%] max-[700px]:h-[60%]">
                            <NuxtLink to="http://bit.ly/TRUEAmazon">
                                <div
                                    class="w-40 h-12.5 bg-[#7F53C3] rounded-[100px] max-[1175px]:w-[145px] max-[1175px]:h-11 max-[1175px]:my-[3px] max-[700px]:w-auto max-[700px]:h-full max-[700px]:rounded-[15px] max-[700px]:bg-[#0A93D2] max-[700px]:bg-linear-90 max-[700px]:from-[#167AEA] max-[700px]:from-30% max-[700px]:to-[#0A93D2] max-[700px]:to-100% max-[700px]:[box-shadow:2px_2px_1px_0_rgba(0,0,0,0.50)]">
                                    <span
                                        class="flex justify-center uppercase text-white text-[26px] leading-[55px] max-[1175px]:text-[22px] max-[1175px]:leading-[47px] max-[700px]:[text-shadow:2px_2px_1px_rgba(0,0,0,0.3)] max-[700px]:text-[18px]"
                                        style="font-family: 'FrankfurterM';">
                                        Shop
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hidden max-[700px]:cursor-pointer max-[700px]:block max-[700px]:fixed max-[700px]:top-[15px] max-[700px]:right-[15px] max-[700px]:w-[50px] max-[700px]:h-[50px] max-[700px]:bg-[#7F53C3] max-[700px]:[box-shadow:4px_2px_6px_0_rgba(0,0,0,0.35)] max-[700px]:rounded-[10px] max-[700px]:z-1000"
            @click="bntNavClicked">
            <div>
                <div
                    class="max-[700px]:w-7.5 max-[700px]:h-1 max-[700px]:mx-auto max-[700px]:mb-1 max-[700px]:mt-[15px] max-[700px]:bg-white max-[700px]:[box-shadow:4px_2px_6px_0_rgba(0,0,0,0.35)] max-[700px]:rounded-[100px] max-[700px]:transition-all max-[700px]:delay-[0.4s]">
                </div>
                <div
                    class="max-[700px]:w-7.5 max-[700px]:h-1 max-[700px]:mx-auto max-[700px]:mb-1 max-[700px]:bg-white max-[700px]:[box-shadow:4px_2px_6px_0_rgba(0,0,0,0.35)] max-[700px]:rounded-[100px] max-[700px]:transition-all max-[700px]:delay-[0.4s]">
                </div>
                <div
                    class="max-[700px]:w-7.5 max-[700px]:h-1 max-[700px]:mx-auto max-[700px]:mb-1 max-[700px]:bg-white max-[700px]:[box-shadow:4px_2px_6px_0_rgba(0,0,0,0.35)] max-[700px]:rounded-[100px] max-[700px]:transition-all max-[700px]:delay-[0.4s]">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.nav {
    border: 12px solid white;
}

.clicked .nav-menus {
    bottom: 0;
    opacity: 1;
}

@media (max-width: 1175px) {
    .nav {
        border-width: 10px;
    }
}

@media (max-width: 700px) {
    .nav {
        border: none;
    }

    .nav-menus {
        transition: all 0.4s;
    }

    .clicked .nav-social {
        top: 15px;
    }
}
</style>