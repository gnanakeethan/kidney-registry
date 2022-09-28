import { activePath } from '$lib/state/SidebarStore';
import NewIcon from '~icons/carbon/add';
import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
let props = {
    activeUrl: activePath,
    base: '/workflow',
    routes: [
        { name: 'Current Workflows', route: '/workflow', icon: DashboardIcon },
        { name: 'New', route: '/workflow/new', icon: NewIcon }
    ]
};
//# sourceMappingURL=+layout.js.map