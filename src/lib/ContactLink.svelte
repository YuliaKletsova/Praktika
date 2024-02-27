<script lang="ts">

    export let link: string;
	export let title: string;
    export let Icon : any;

    let bgColor = "black";
    let color = "rgb(63, 81, 181)";
	
	function handleMouseOver() {
		bgColor = 'rgb(63, 81, 181)';
        color = "white";
	}
	function handleMouseOut() {
		bgColor = 'black';
        color = 'rgb(63, 81, 181)';
	}
</script>

<a href={link} 
    target="_blank" 
    class="text-black flex flex-row gap-5 p-5" 
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={() => ({})} 
    on:blur={() => ({})}
    >
        <Icon color={color} bgColor={bgColor}/>
        {title}
</a>


<style>
    a:hover {
        background-color: rgb(63, 81, 181);
        border-radius: 8px;
        color: white;
        transform: scale(1.02);
    }
</style>