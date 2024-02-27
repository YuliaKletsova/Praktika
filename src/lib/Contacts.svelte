<script lang="ts">
    import Phone from './icons/Phone.svelte'
    import Telegram from './icons/Telegram.svelte'
    import Map from './Map.svelte'
    import ContactLink from './ContactLink.svelte'
    import Instagram from './icons/Instagram.svelte'
    import ExternalLink from './icons/ExternalLink.svelte'

    let info = [
        {title: 'Instagram', link: 'https://www.instagram.com/praktikastudio/', icon: Instagram},
        // {title: 'Booking', link: 'https://t.me/praktikastudio', iconSrc: telegramIcon},
        {title: 'Praktika Channel', link: 'https://t.me/praktikastudio_ch', icon: Telegram},
        {title: 'Praktika Chat', link: 'https://t.me/+ACspuFKLISBkMjky', icon: Telegram},
        {title: 'Google Maps', link: 'https://goo.gl/maps/mQv4W9rRn1dmJStN6', icon: ExternalLink},
    ]

    // handling hover for phone
    let color = "rgb(63, 81, 181)";
	function handleMouseOver() {
        color = "white";
	}
	function handleMouseOut() {
        color = 'rgb(63, 81, 181)';
	}
</script>

<Map />
<div class="flex flex-col gap-1">
    <div class="text-black flex flex-col mb-2 p-5">
        <span class="font-semibold">Music studio</span>
        <span>5 Mikheil Asatiani St, Tbilisi</span>
        <span>11.00 - 23.00</span>
    </div>

    {#each info as entry (entry.link)}
        <ContactLink link={entry.link} title={entry.title} Icon={entry.icon} />
    {/each}

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="text-black flex flex-row gap-3 p-5 phone" 
        on:mouseover={handleMouseOver}
        on:mouseout={handleMouseOut}
        on:focus={() => ({})} 
        on:blur={() => ({})}
        >
        <Phone color={color}/>
        <div>+995551613311</div>
    </div>
</div>


<style>
    .phone:hover {
        background-color: rgb(63, 81, 181);
        border-radius: 8px;
        color: white;
        transform: scale(1.02);
    }
</style>