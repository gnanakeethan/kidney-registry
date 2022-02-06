<div class="p-3 font-bold">
    <label class="text-xs text-medium-black" for={name}>{label}</label>
    <input class="text-light-black text-xs w-full border-dark-gray focus:ring-light-green  focus:border-light-green rounded-md bg-light-gray" id='{name}'
           placeholder={placeholder}
           type="text">
</div>

<script>
    export let label = '';
    export let name = '';
    export let placeholder = '';
</script>
