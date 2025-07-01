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
    title: "Foundations & Best Practices",
    items: [
      "how to securely deploy ai chatbots",
      "best practices to securely deploy ai chatbots",
      "guidelines to securely deploy ai chatbots",
      "checklist to securely deploy ai chatbots",
    ],
    ranking: ["1", "1", "1", "1"],
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Enterprise & Business Deployment",
    items: [
      "steps to securely deploy ai chatbots in enterprise",
      "ways to securely deploy ai chatbots in business",
      "securely deploy ai chatbots for customer support",
    ],
    ranking: ["1", "1", "1"],
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Tools & Technical Safeguards",
    items: [
      "tools to securely deploy ai chatbots",
      "securely deploy ai chatbots with data protection",
      "securely deploy ai chatbots against prompt injection",
    ],
    ranking: ["1", "1", "1"],
    icon: <Shield className="h-5 w-5" />,
  },
]

/* ================================
   Content Plan
   ================================ */
const contentPlan = [
  {
    title: "Ultimate Secure Deployment Checklist",
    objectives: [
      "Printable & interactive checklist (PDF & Notion).",
      "Covers network, auth, data-at-rest, data-in-transit, monitoring.",
      "Page length: 1,400+ words.",
    ],
    reasoning:
      "Although the checklist query is already Page 1, a premium downloadable will reinforce leadership and earn backlinks, future-proofing the position.",
    relatedKeywords: ["checklist to securely deploy ai chatbots"],
    currentRanking: "Page 1",
  },
  {
    title: "Prompt-Injection Defense Playbook",
    objectives: [
      "Red-team scenarios, mitigation patterns, policy examples.",
      "Live code (Python) implementing guardrails & content filters.",
      "Page length: 1,300+ words.",
    ],
    reasoning:
      "Maintains competitive edge on ‘prompt injection’ by providing the most comprehensive, technical reference available.",
    relatedKeywords: ["securely deploy ai chatbots against prompt injection"],
    currentRanking: "Page 1",
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
              Secure AI Chatbot Deployment SEO Analysis
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance snapshot & content roadmap for dominating searches
              around securely deploying AI chatbots
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
                  Currently no Page 2 keywords
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
                  No gaps detected
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
                            <Badge>Strong</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {cluster.items.map((kw, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center text-sm py-1 border-b border-slate-100 dark:border-slate-800 last:border-0"
                            >
                              <span className="truncate mr-2">{kw}</span>
                              <Badge
                                variant="success"
                                className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                              >
                                P1
                              </Badge>
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
                        <h3 className="font-medium">Complete SERP Coverage</h3>
                        <p className="text-sm text-muted-foreground">
                          100 % of tracked keywords rank on Page 1, spanning best
                          practices, enterprise workflows, and technical tooling.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Deep Intent Alignment</h3>
                        <p className="text-sm text-muted-foreground">
                          Dominance across how-to, checklist, and tool-centric
                          queries captures users throughout the deployment
                          journey.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weaknesses */}
                  <Card className="border-l-4 border-l-amber-500">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <CardTitle>Watch-outs</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Content Freshness</h3>
                        <p className="text-sm text-muted-foreground">
                          Competitors can overtake positions quickly; maintaining
                          updated checklists & code samples is crucial.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Technical Depth</h3>
                        <p className="text-sm text-muted-foreground">
                          To sustain leadership, expand real-world examples and
                          defensive coding patterns (e.g., prompt-injection
                          guardrails).
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
                            <Badge variant="default" className="ml-2">
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
