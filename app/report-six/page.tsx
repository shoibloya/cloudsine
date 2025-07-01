"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Shield,
  FileText,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react"
import { motion } from "framer-motion"

/* ================================
   Keyword Clusters & Rankings
   ================================ */
const clusters = [
  {
    title: "Build & Best Practices",
    items: [
      "how to build a secure RAG application",
      "best practices for secure RAG application",
      "steps to create a secure RAG application",
    ],
    ranking: ["1", "1", "1"],
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Architecture & Principles",
    items: [
      "how does a secure RAG application work",
      "what makes a secure RAG application",
      "why use a secure RAG application",
    ],
    ranking: ["1", "1", "1"],
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Enterprise & Sensitive Data",
    items: [
      "enterprise guide to secure RAG application",
      "secure RAG application for sensitive data",
    ],
    ranking: ["-1", "-1"],
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Deployment & Checklist",
    items: [
      "secure RAG application deployment tips",
      "secure RAG application security checklist",
    ],
    ranking: ["1", "1"],
    icon: <Shield className="h-5 w-5" />,
  },
]

/* ================================
   Content Plan
   ================================ */
const contentPlan = [
  {
    title: "Enterprise RAG Adoption Blueprint",
    objectives: [
      "End-to-end implementation guide (network, IAM, DevSecOps hooks).",
      "Governance & audit templates (SOC 2, ISO 27001 alignment).",
      "Page length: 1,500 + words with diagrams & code.",
    ],
    reasoning:
      "“Enterprise guide” currently ranks –1. A comprehensive blueprint will close this gap and reinforce leadership for enterprise intent.",
    relatedKeywords: ["enterprise guide to secure RAG application"],
    currentRanking: "Position -1",
  },
  {
    title: "Sensitive-Data Protection Strategies for RAG",
    objectives: [
      "Data-classification workflow & encryption/redaction pipeline.",
      "Python examples using LangChain & AES/GCP KMS.",
      "Page length: 1,400 + words.",
    ],
    reasoning:
      "“Secure RAG application for sensitive data” is –1. Deep coverage ensures trust for regulated-industry buyers.",
    relatedKeywords: ["secure RAG application for sensitive data"],
    currentRanking: "Position -1",
  },
]

/* ================================
   Statistics
   ================================ */
const totalKeywords = clusters.reduce((sum, c) => sum + c.items.length, 0)
const page1Rankings = clusters.reduce(
  (sum, c) => sum + c.ranking.filter((r) => r === "1").length,
  0
)
const page2Rankings = clusters.reduce(
  (sum, c) => sum + c.ranking.filter((r) => r === "2").length,
  0
)
const negativeRankings = clusters.reduce(
  (sum, c) => sum + c.ranking.filter((r) => r.includes("-")).length,
  0
)
const rankingPercentage = Math.round((page1Rankings / totalKeywords) * 100)

/* ================================
   Page Component
   ================================ */
export default function Page() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center space-y-4" variants={fadeIn}>
            <h1 className="text-4xl font-bold tracking-tight">
              Secure RAG Application SEO Analysis
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keyword performance snapshot & content roadmap for dominating
              searches on secure Retrieval-Augmented Generation (RAG)
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={fadeIn}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Keywords
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalKeywords}</div>
                <p className="text-xs text-muted-foreground">
                  Across {clusters.length} topic clusters
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Page 1 Rankings
                </CardTitle>
                <ArrowUpRight className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{page1Rankings}</div>
                <div className="flex items-center">
                  <Progress value={rankingPercentage} className="h-2 w-full" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    {rankingPercentage}%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Page 2 Rankings
                </CardTitle>
                <Minus className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{page2Rankings}</div>
                <p className="text-xs text-muted-foreground">
                  No Page 2 keywords
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Negative Rankings
                </CardTitle>
                <ArrowDownRight className="h-4 w-4 text-rose-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{negativeRankings}</div>
                <p className="text-xs text-muted-foreground">
                  Requires immediate action
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={fadeIn}>
            <Tabs defaultValue="clusters" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="clusters">Keyword Clusters</TabsTrigger>
                <TabsTrigger value="insights">Strengths & Weaknesses</TabsTrigger>
                <TabsTrigger value="content">Content Plan</TabsTrigger>
              </TabsList>

              {/* Keyword Clusters Tab */}
              <TabsContent value="clusters" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {clusters.map((cluster, idx) => (
                    <motion.div
                      key={cluster.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                                {cluster.icon}
                              </div>
                              <CardTitle className="text-base">
                                {cluster.title}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                cluster.ranking.every((r) => r === "1")
                                  ? "default"
                                  : cluster.ranking.some((r) => r.includes("-"))
                                  ? "destructive"
                                  : "outline"
                              }
                            >
                              {cluster.ranking.every((r) => r === "1")
                                ? "Strong"
                                : "Weak"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {cluster.items.map((kw, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center text-sm py-1 border-b border-slate-100 dark:border-slate-800 last:border-0"
                            >
                              <span className="truncate mr-2">{kw}</span>
                              {cluster.ranking[i] === "1" ? (
                                <Badge
                                  variant="success"
                                  className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                                >
                                  P1
                                </Badge>
                              ) : (
                                <Badge variant="destructive">-1</Badge>
                              )}
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Strengths & Weaknesses Tab */}
              <TabsContent value="insights">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Strengths */}
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        <CardTitle>Strengths</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Comprehensive Coverage</h3>
                        <p className="text-sm text-muted-foreground">
                          Dominates Page 1 across build, architecture, deployment and
                          checklist queries—capturing developers at every stage.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">High Intent Alignment</h3>
                        <p className="text-sm text-muted-foreground">
                          Guides cover practical how-to steps and decision criteria,
                          matching searchers’ implementation needs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weaknesses */}
                  <Card className="border-l-4 border-l-rose-500">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-rose-500" />
                        <CardTitle>Weaknesses</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Enterprise Gap</h3>
                        <p className="text-sm text-muted-foreground">
                          Lacks visibility for enterprise-level guidance (–1) —
                          jeopardises credibility with large-scale adopters.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Sensitive-Data Trust</h3>
                        <p className="text-sm text-muted-foreground">
                          Searches focused on handling sensitive data also rank –1,
                          signalling a need for deeper security assurances.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Content Plan Tab */}
              <TabsContent value="content">
                <div className="space-y-6">
                  {contentPlan.map((plan, idx) => (
                    <motion.div
                      key={plan.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="overflow-hidden">
                        <CardHeader className="bg-slate-50 dark:bg-slate-800 pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{plan.title}</CardTitle>
                            <Badge
                              variant={plan.currentRanking.includes("-1") ? "destructive" : "default"}
                              className="ml-2"
                            >
                              {plan.currentRanking}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                              <h3 className="text-sm font-medium mb-3">Objectives</h3>
                              <ul className="space-y-2">
                                {plan.objectives.map((objective, i) => (
                                  <li key={i} className="flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-sm font-medium mb-2">Strategic Rationale</h3>
                                <p className="text-sm text-muted-foreground">{plan.reasoning}</p>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium mb-2">Target Keywords</h3>
                                <div className="flex flex-wrap gap-2">
                                  {plan.relatedKeywords.map((keyword, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                      {keyword}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
