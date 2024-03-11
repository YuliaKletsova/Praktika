<script lang='ts'>
    import { Card, Textarea, Button, Input, Label } from 'flowbite-svelte';

    let selectedSlotIndexes: any = {};
    let error: null | string = null;
    let timeSlotOutlinedClass = "p-2 border-customBlue border-2 rounded-xl text-black focus:ring-0"
    let timeSlotFilledClass = "p-2 bg-customBlue border-2 rounded-xl text-white focus:ring-0"
    let isMobile = window.innerWidth < 700;

    function toggleSelected(index: number) {
        selectedSlotIndexes[index] = !selectedSlotIndexes[index];
        selectedSlotIndexes = { ...selectedSlotIndexes };
        error = null;
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const timeSlots = slots.filter((_, index) => selectedSlotIndexes[index]) || [];

        if (!timeSlots.length) {
            error = 'Choose time slot'
            return;
        }

        let data: Record<string, any> = {timeSlots: timeSlots};
        formData.forEach((value, key) => {
            data[key] = value;
        });
    
        console.log(data);
    }

    let slots = [
        {
            timeStart: '15:00',
            timeEnd: '16:00',
        },
        {
            timeStart: '16:00',
            timeEnd: '17:00',
        },
        {
            timeStart: '17:00',
            timeEnd: '18:00',
        },
        {
            timeStart: '18:00',
            timeEnd: '19:00',
        },
        {
            timeStart: '19:00',
            timeEnd: '20:00',
        },
        {
            timeStart: '20:00',
            timeEnd: '21:00',
        },
        {
            timeStart: '21:00',
            timeEnd: '22:00',
        }
    ];
  </script>
  
  <Card size={isMobile ? "sm": "lg"} class="m-5 md:m-0">
    <form on:submit={handleSubmit}>
        <div class="flex flex-col gap-5">
            <div>
                <Label for="name" class="mb-2">Full Name</Label>
                <Input type="text" id="name" name="name" required/>    
            </div>
            
            <div>
                <Label for="username" class="mb-2">Telegram Username</Label>
                <Input type="text" id="username" name="username" required/>
            </div>

            <div>
                <Label for="timeSlots" class="mb-2">Available timeslots</Label>
                <div class="flex justify-center gap-1 flex-wrap">
                    {#each slots as slot,index}
                        <Button
                            class={selectedSlotIndexes[index] ? timeSlotFilledClass : timeSlotOutlinedClass}
                            on:click={() => toggleSelected(index)}
                            value={slot}
                            >
                                {slot.timeStart}&nbsp;&#8212;&nbsp;{slot.timeEnd}
                        </Button>
                    {/each}
                </div>
                {#if error}
                    <div class="flex justify-end">
                        <p class="text-red-600 text-sm">{error}</p>
                    </div>
                {/if}
            </div>

            <div>
                <Label for="comment" class="mb-2">Comment</Label>
                <Textarea 
                    class="placeholder-gray-400 max-h-28"
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Let us know if you need something for the perfect rehearsal"
                    />    
            </div>

            <div class="flex justify-end">
                <Button class="bg-customBlue" type="submit">Submit</Button>
            </div>
        </div>
    </form>
  </Card>