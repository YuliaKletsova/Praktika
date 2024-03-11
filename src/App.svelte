<script lang="ts">
    import logo from './assets/praktika.jpg'
  import About from './lib/About.svelte'
    import Contacts from './lib/Contacts.svelte'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';


    function scrollToSection(id: string) {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<style>
    .page {height: 100vh; width: 100vw;}
</style>

<div class="sticky top-0">
    <Navbar class="md:bg-customBlue sm:bg-white">
        <NavHamburger  class="hamburger stroke-white"/>
        <NavBrand />
        <NavUl>
          <NavLi on:click={() => scrollToSection('home')} class="md:text-white sm:text-black">Home</NavLi>
          <NavLi on:click={() => scrollToSection('schedule')} class="md:text-white sm:text-black">Schedule</NavLi>
          <NavLi on:click={() => scrollToSection('about')} class="md:text-white sm:text-black">About</NavLi>
          <NavLi on:click={() => scrollToSection('contacts')} class="md:text-white sm:text-black">Contacts</NavLi>
        </NavUl>
    </Navbar>
</div>
<div id="home" class="flex justify-center items-center page">
    <div class="flex items-center">
        <img src={logo} alt="Logo" class="md:shrink-0 md:w-36 md:h-36 w-12 h-12"/>
        <span class="font-bold md:text-8xl text-5xl">ráktika</span>
    </div>
</div>
<div id="schedule" class="flex justify-center items-center page bg-white">
    <span class="text-black">форма для заполнения пользователем здесь</span>
</div>
<div id="about" class="flex justify-center items-center page bg-white">
    <About />
</div>
<div id="contacts" class="flex md:gap-20 gap-0  page bg-white md:p-40 p-20">
   <Contacts />
</div>
