import IndexPage from '../components/indexPage.vue'
import Detail from '../pages/detail.vue'
import Family from '../pages/detail/family.vue'
export default {
    mode: 'history',
    routes: [
        {
            path: "/",
            component: IndexPage
        },
        {
            path: "/detail",
            component: Detail,
            children: [
                {
                    path: "family",
                    component: Family
                }
            ]
        }
    ]
}