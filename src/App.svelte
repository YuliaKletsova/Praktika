<script lang="ts">
    import logo from './assets/praktika.jpg'
    import About from './lib/About.svelte'
    import Form from './lib/Form.svelte'
    import Contacts from './lib/Contacts.svelte'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    let height = window.innerHeight;

    function scrollToSection(id: number) {
        window?.scroll({
            top: height * id,
            behavior: "smooth",
        })
        // const section = document.getElementById(id);
        // section?.scrollIntoView({ behavior: 'smooth',  block: 'center'  });
    }
</script>

<style>
    .page { height: 100vh; width: 100vw; }
</style>

<div class="sticky top-0">
    <Navbar let:hidden let:toggle class="bg-customBlue">
        <NavHamburger menuClass="text-white" class="hover:bg-customBlue hover:ring-2 hover:ring-gray-400"/>
        <NavBrand />
        <NavUl {hidden}>
          <NavLi on:click={() => {scrollToSection(0); toggle()}} class="md:text-white sm:text-black">Home</NavLi>
          <NavLi on:click={() => {scrollToSection(1); toggle()}} class="md:text-white sm:text-black">Schedule</NavLi>
          <NavLi on:click={() => {scrollToSection(2); toggle()}} class="md:text-white sm:text-black">About</NavLi>
          <NavLi on:click={() => {scrollToSection(3); toggle()}} class="md:text-white sm:text-black">Contacts</NavLi>
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
    <Form />
</div>
<div id="about" class="flex justify-center items-center page bg-white">
    <About />
</div>
<div id="contacts" class="flex md:gap-20 gap-0 page bg-white md:p-40 p-10">
   <Contacts />
</div>
