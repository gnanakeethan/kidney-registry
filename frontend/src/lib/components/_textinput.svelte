<div class="p-3 font-bold">
    <label for={name} class="text-xs text-medium-black">{label}</label>
    <input id='{name}' type="text" class="text-light-black text-xs w-full border-dark-gray focus:ring-light-green  focus:border-light-green rounded-md bg-light-gray" placeholder={placeholder} >
</div>

<script>
    export let label ='';
    export let name ='';
    export let placeholder ='';
</script>
