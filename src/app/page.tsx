import Link from "next/link";
import {
  Cpu,
  ShieldCheck,
  Factory,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavAuth } from "@/components/nav-auth";

const features = [
  {
    icon: Cpu,
    title: "AI 자동 회로 설계",
    description:
      "부품 리스트와 요구사항만 입력하면 AI가 최적의 회로도와 PCB 레이아웃을 자동 생성합니다.",
  },
  {
    icon: ShieldCheck,
    title: "실시간 DRC 검증",
    description:
      "설계 규칙 위반을 실시간으로 감지하고 자동 수정 제안으로 오류 없는 보드를 완성합니다.",
  },
  {
    icon: Factory,
    title: "원클릭 제조 발주",
    description:
      "검증된 거버 파일을 바로 제조사에 전송합니다. 견적 비교부터 발주까지 한 번에.",
  },
];

const plans = [
  {
    name: "Free",
    price: "무료",
    description: "개인 프로젝트와 학습용",
    features: [
      "월 3회 AI 설계",
      "기본 DRC 검증",
      "커뮤니티 지원",
      "단일 프로젝트",
    ],
    cta: "무료로 시작",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Coming Soon",
    description: "전문 엔지니어를 위한 플랜",
    features: [
      "무제한 AI 설계",
      "고급 DRC + 시뮬레이션",
      "우선 기술 지원",
      "무제한 프로젝트",
      "제조 발주 연동",
    ],
    cta: "출시 알림 받기",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "문의",
    description: "팀과 조직을 위한 맞춤형",
    features: [
      "Pro 전체 기능 포함",
      "팀 협업 워크스페이스",
      "SSO / 감사 로그",
      "전용 지원 매니저",
      "온프레미스 배포 옵션",
    ],
    cta: "영업팀 문의",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Zap className="h-6 w-6 text-primary" />
            AutoPCB
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <NavAuth />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI로 PCB 설계부터
              <br />
              <span className="text-primary">제조까지</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              부품 리스트만 입력하면 AI가 회로도 생성, DRC 검증, 제조 발주까지
              한 번에 처리합니다. 하드웨어 개발의 새로운 시대를 경험하세요.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/sign-up">
                <Button size="lg" className="gap-2">
                  설계 시작하기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                데모 보기
              </Button>
            </div>
          </div>
          {/* Gradient blobs */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" />
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                왜 AutoPCB인가?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                복잡한 PCB 설계를 AI가 자동화합니다
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <Card
                  key={f.title}
                  className="border-0 bg-background shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                요금제
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                프로젝트 규모에 맞는 플랜을 선택하세요
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex flex-col ${
                    plan.highlighted
                      ? "border-primary shadow-xl ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  <CardHeader>
                    {plan.highlighted && (
                      <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        추천
                      </span>
                    )}
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 text-3xl font-bold">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              지금 설계를 시작하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              복잡한 툴 없이, AI와 함께 첫 번째 PCB를 설계해보세요. 무료로
              시작할 수 있습니다.
            </p>
            <div className="mt-10">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 text-base"
                >
                  무료로 시작하기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AutoPCB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
