import { Search } from 'lucide-react'

export function AttendeeList () {
    <div>
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes-</h1>
      <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
      <search className="size-4 text-emerald-300"/>
      <input className="bg-transparent" placeholder="Buscar Participantes"/>
      </div>
    </div>

<div className="border border-white/10 rounded-lg">
    <table className="w-full">
        <thead>
            <tr className="border-b border-white/10">
                <th className="py-3 px-2.5 text-sm font-semibold text-left">
                    <input type="checkbox" />
                </th>
                <th className="py-3 px-2.5 text-sm font-semibold text-left">Código</th>
                <th className="py-3 px-2.5 text-sm font-semibold text-left">Participantes</th>
                <th className="py-3 px-2.5 text-sm font-semibold text-left">Data de Incrição</th>
                <th className="py-3 px-2.5 text-sm font-semibold text-left">Data de check-in</th>
                <th className="py-3 px-2.5 text-sm font-semibold text-left"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="py-3 px-2.5 text-sm">
                    <input type="checkbox" />
                </td>
                <td className="py-3 px-2.5 text-sm">12383</td>
                <td className="py-3 px-2.5 text-sm">
                    <div>
                        <span>Pablo Henrique de Oliveira</span>
                        <span>pablo2@mx2.unisc.br</span>
                    </div>
                </td>
                <td className="py-3 px-2.5 text-sm">7 dias atrás</td>
                <td className="py-3 px-2.5 text-sm">3 dias atrás</td>
                <td className="py-3 px-2.5 text-sm"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={3}>
                    Mostrando 10 de 228 itens
                </td>
                <td colSpan={3}>
                    Página 1 de 23
                </td>
            </tr>
        </tfoot>
    </table>
</div>

    </div>
}