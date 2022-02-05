<script>
    import {userType} from '$lib/state/auth';

    let userTypeLocal = '';
    userType.subscribe((value) => {
        userTypeLocal = value;
    });
</script>

<div>
    <div>
        <div class="h-5 p-4 grid grid-cols-4 w-1/6">
            <div class="font-serif">Testing</div>
            <div>Testing</div>
            <div class="font-sans">Testing</div>
            <div class="font-serif">Testing</div>
            <div>Testing</div>
            <div class="font-serif">Testing</div>
        </div>
    </div>
</div>
