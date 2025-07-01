"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Search,
  Shield,
  FileText,
  Zap,
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
    title: "Implementation & Best Practices",
    items: [
      "Generative AI security for enterprises best practices",
      "How to implement Generative AI security for enterprises",
    ],
    ranking: ["-1", "1"],
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Solutions & Platforms",
    items: [
      "Top Generative AI security for enterprises solutions",
      "Choosing Generative AI security for enterprises platforms",
      "Evaluating Generative AI security for enterprises vendors",
    ],
    ranking: ["1", "1", "1"],
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Risks & Protections",
    items: [
      "Generative AI security for enterprises risks and protections",
      "Generative AI security for enterprises threat prevention",
    ],
    ranking: ["1", "1"],
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Data & Governance",
    items: [
      "Generative AI security for enterprises data protection strategies",
      "Generative AI security for enterprises compliance requirements",
      "Generative AI security for enterprises governance frameworks",
    ],
    ranking: ["1", "1", "-1"],
    icon: <BarChart3 className="h-5 w-5" />,
  },
]

/* ================================
   Content Plan
   ================================ */
const contentPlan = [
  {
    title: "Enterprise Best Practices Guide",
    objectives: [
      "Step-by-step framework & checklist.",
      "Code snippets (Python) for policy enforcement.",
      "Page length: 1,500+ words.",
    ],
    reasoning:
      '"Best practices" currently has a negative ranking (-1). A comprehensive guide will directly target this gap and elevate overall topical authority.',
    relatedKeywords: ["Generative AI security for enterprises best practices"],
    currentRanking: "Position -1",
  },
  {
    title: "Governance Frameworks & Compliance Playbook",
    objectives: [
      "Compare NIST, ISO/IEC, and proprietary frameworks.",
      "Mapping to regional compliance (GDPR, HIPAA, etc.).",
      "Templates & downloadable checklists.",
      "Page length: 1,300+ words.",
    ],
    reasoning:
      '"Governance frameworks" lacks visibility (-1), while compliance is Page 1. Deep coverage will lift the weak term and reinforce compliance leadership.',
    relatedKeywords: [
      "Generative AI security for enterprises governance frameworks",
      "Generative AI security for enterprises compliance requirements",
    ],
    currentRanking: "Position -1",
  },
]

/* ================================
   Statistics
   ================================ */
const totalKeywords = clusters.reduce((acc, c) => acc + c.items.length, 0)
const page1Rankings = clusters.reduce(
  (acc, c) => acc + c.ranking.filter((r) => r === "1").length,
  0,
)
const page2Rankings = clusters.reduce(
  (acc, c) => acc + c.ranking.filter((r) => r === "2").length,
  0,
)
const negativeRankings = clusters.reduce(
  (acc, c) => acc + c.ranking.filter((r) => r.includes("-")).length,
  0,
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
    animate: {
      transition: { staggerChildren: 0.1 },
    },
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
              Enterprise Generative AI Security SEO Analysis
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keyword performance overview and content strategy for dominating
              enterprise-grade Generative AI security search intent
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
                  Opportunity for improvement
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
                                : cluster.ranking.some((r) => r.includes("-"))
                                ? "Weak"
                                : "Mixed"}
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
                              <div className="flex items-center">
                                {cluster.ranking[i] === "1" ? (
                                  <Badge
                                    variant="success"
                                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                                  >
                                    P1
                                  </Badge>
                                ) : cluster.ranking[i] === "2" ? (
                                  <Badge
                                    variant="outline"
                                    className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                                  >
                                    P2
                                  </Badge>
                                ) : (
                                  <Badge variant="destructive">-1</Badge>
                                )}
                              </div>
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
                        <h3 className="font-medium">Solution & Protection Coverage</h3>
                        <p className="text-sm text-muted-foreground">
                          Page 1 rankings dominate “solutions”, “platforms” and “risks & protections” searches.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Vendor Decision Journey</h3>
                        <p className="text-sm text-muted-foreground">
                          Strong presence for high-intent keywords like “evaluating vendors” & “choosing platforms”.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Compliance Authority</h3>
                        <p className="text-sm text-muted-foreground">
                          Already ranking on Page 1 for compliance requirements.
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
                        <h3 className="font-medium">Best Practices Gap</h3>
                        <p className="text-sm text-muted-foreground">
                          No visibility for “best practices” (-1) — undermines thought-leadership positioning.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Governance Visibility</h3>
                        <p className="text-sm text-muted-foreground">
                          “Governance frameworks” sits at (-1) despite compliance strength.
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
                              variant={plan.currentRanking.includes("-1") ? "destructive" : "outline"}
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
                                <h3 className="text-sm font-medium mb-2">Data-Driven Reasoning</h3>
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
