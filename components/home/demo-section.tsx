import { BookOpen } from "lucide-react"
import SummaryViewer from "../summaries/summary-viewer"

export default function DemoSection() {
    // Demo summary data for the viewer
    const demoSummary = `# Solving Linear Equations with Jacobi & Gauss-Seidel! 🧮

. 🔥 This code solves systems of linear equations using the Jacobi and Gauss-Seidel methods, comparing their efficiency.  
. 💡 Includes partial pivoting for improved accuracy in one system!

# Document Details 📄

. 📝 Type: C++ Code & Output  
. 🎯 For: Students, Engineers, Numerical Analysts

# Key Highlights ✨

. 💥 Implements both Jacobi and Gauss-Seidel iterative methods.  
. 🚀 Solves two different systems of linear equations.  
. 🌈 Demonstrates partial pivoting for enhanced stability.

# Why It Matters 🤔

. 🌍 Understanding these numerical methods is crucial for solving real-world problems in engineering, physics, and data science where direct solutions are not feasible. This code provides a practical example of how these methods are applied and compared.

# Main Points 🔑

. 📌 System 1 is solved to 4 decimal places using both methods.  
. ⚡ System 2 incorporates partial pivoting and is solved to 5 decimal places.  
. 🎯 The code outputs the number of iterations required for each method to converge and the final solutions.

# Pro Tips 💡

. 🛠️ Adjust the tolerance (\`tol1\`, \`tol2\`) to control the accuracy of the solution.  
. 🧠 Gauss-Seidel often converges faster than Jacobi, but this isn't always the case.  
. 🚀 Partial pivoting can significantly improve the stability and accuracy of the solution, especially for ill-conditioned systems.

# Key Terms to Know 📚

. 🔍 Jacobi Method: An iterative method that updates all variables simultaneously in each iteration.  
. 🔑 Gauss-Seidel Method: An iterative method that uses updated variable values immediately in the same iteration.

# Bottom Line 📝

. 🎯 This code provides a hands-on example of solving linear equations using iterative methods, highlighting the importance of method selection and partial pivoting for accuracy and efficiency!`

    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-200/80 backdrop-blur-xs border border-gray-500/20 mb-4">
                        <BookOpen className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="text-center mb-16">
                        <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">
                            See how Lexis transforms <span className="bg-linear-to-br from-purple-400 to-purple-800 bg-clip-text text-transparent">complex mathematical papers</span> into digestible summaries!
                        </h3>
                    </div>
                    <div>
                        <SummaryViewer summary={demoSummary} />
                    </div>
                </div>
            </div>
        </section>
    )
}