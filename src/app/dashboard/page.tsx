import { currentUser } from "@clerk/nextjs/server";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FolderOpen, Cpu, Clock } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          안녕하세요, {user?.firstName ?? "사용자"}님
        </h1>
        <p className="text-muted-foreground">AutoPCB 대시보드입니다.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">총 프로젝트</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">새 프로젝트를 만들어보세요</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI 설계 횟수</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 / 3</div>
            <p className="text-xs text-muted-foreground">이번 달 무료 사용량</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">최근 활동</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">아직 활동이 없습니다</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Cpu className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold">첫 번째 PCB를 설계해보세요</h3>
          <p className="text-sm text-muted-foreground mt-1">
            새 프로젝트를 생성하고 AI 설계를 시작합니다
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
