import Pagination from '@/components/Pagination/src/Pagination.vue'
import PaginationMenu from '@/components/PaginationMenu/src/PaginationMenu.vue'

export default {
  title: 'Components/Pagination',
  includeStories: []
}

const createDemo = (selected, totalCount, pageSize, background=false) => {
    return {
        components: { Pagination },
        data() {
            return {
                selected: selected,
                totalCount: totalCount,
                pageSize: pageSize,
                background: background
            }
        },
        template: `
            <div>
                <pagination :total-count="totalCount" :selected="selected" :page-size="pageSize" :background="background"/>
            </div>
        `
    }
}

export const Primary = () => createDemo(3, 100, 20)

export const Secondary = () => createDemo(10, 1000, 20)

export const Background = () => createDemo(10, 1000, 20, true)

export const Menu = () => ({
    components: { PaginationMenu },
    data() {
        return { pageSize: 10 }
    },
    template:`
        <div>
            <pagination-menu :page-size="pageSize" />
        </div>
    `
})