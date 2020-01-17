import IndexPage from '../components/indexPage.vue'
import Detail from '../pages/detail.vue'
import Family from '../pages/detail/family.vue'
import IceBear from '../pages/detail/iceBear.vue'
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
			redirect: '/detail/family',
            children: [
                {
                    path: "family",
                    component: Family
                },
                {
                    path: 'IceBear',
                    component: IceBear
                }
            ]
        }
    ]
}