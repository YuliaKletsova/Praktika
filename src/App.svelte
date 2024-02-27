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
    <Navbar class="bg-customBlue">
        <NavHamburger  />
        <NavBrand />
        <NavUl class="flex flex-col justify-end">
          <NavLi on:click={() => scrollToSection('home')} class="text-white">Home</NavLi>
          <NavLi on:click={() => scrollToSection('schedule')} class="text-white">Schedule</NavLi>
          <NavLi on:click={() => scrollToSection('about')} class="text-white">About</NavLi>
          <NavLi on:click={() => scrollToSection('contacts')} class="text-white">Contacts</NavLi>
        </NavUl>
    </Navbar>
</div>
<div id="home" class="flex justify-center items-center page">
    <div class="flex items-center">
        <img src={logo} alt="Logo" width={150} height={150} class="shrink-0"/>
        <span class="font-bold text-8xl">ráktika</span>
    </div>
</div>
<div id="schedule" class="flex justify-center items-center page bg-white">
    <span class="text-black">форма для заполнения пользователем здесь</span>
</div>
<div id="about" class="flex justify-center items-center page bg-white">
    <About />
</div>
<div id="contacts" class="flex gap-20 items-center page bg-white p-40">
   <Contacts />
</div>
