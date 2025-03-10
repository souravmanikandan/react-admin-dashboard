import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {motion} from "framer-motion"

const salesData = [
    { name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
]
const SalesOverviewPage = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.2}}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>
    </motion.div>
  )
}

export default SalesOverviewPage