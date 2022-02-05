<script>
    import {userType} from '$lib/state/auth';

    let userTypeLocal = '';
    userType.subscribe(value => {
        userTypeLocal = value;
    });
</script>
<div>
    <div>
        <div class="m-2        h-5 m-3 p-4">
            <div>
            </div>
        </div>
    </div>
</div>