import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Package,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  RefreshCw,
  Send,
  User,
  MapPin,
  Check
} from 'lucide-react';

interface InteractiveLedgerSoftwareProps {
  initialTab?: 'dashboard' | 'sales' | 'orders' | 'inventory' | 'ai-parser';
  compact?: boolean;
}

export const InteractiveLedgerSoftware: React.FC<InteractiveLedgerSoftwareProps> = ({
  initialTab = 'dashboard',
  compact = false,
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'sales' | 'orders' | 'inventory' | 'ai-parser'>(initialTab);

  // Sales state
  const [salesList, setSalesList] = useState([
    { id: 'INV-4091', item: 'Espresso Roast Blend (1kg)', customer: 'Tariq Khan', amount: 48, cost: 24, profit: 24, time: '12m ago', status: 'Completed' },
    { id: 'INV-4090', item: 'Organic Sourdough Loaf (x3)', customer: 'Sara Ahmed', amount: 36, cost: 14, profit: 22, time: '35m ago', status: 'Completed' },
    { id: 'INV-4089', item: 'Cold Brew Keg Kit', customer: 'Blue Horizon Cafe', amount: 195, cost: 95, profit: 100, time: '1h ago', status: 'Completed' },
    { id: 'INV-4088', item: 'Ceramic Handcrafted Cups (x4)', customer: 'Zainab Bibi', amount: 72, cost: 32, profit: 40, time: '2h ago', status: 'Completed' },
  ]);

  // Order state
  const [orders, setOrders] = useState([
    { id: 'ORD-892', customer: 'Ayesha Merchant', items: '2x Roasted Almonds, 1x Honey Jar', total: 54, advance: 54, due: 0, status: 'Ready for Dispatch', channel: 'WhatsApp' },
    { id: 'ORD-891', customer: 'Farhan & Sons', items: '10x Gift Hampers (Custom)', total: 320, advance: 150, due: 170, status: 'Pending Due', channel: 'Direct Order' },
    { id: 'ORD-890', customer: 'Mehak Fatima', items: '1x Ceramic Pour-over Set', total: 65, advance: 65, due: 0, status: 'Delivered', channel: 'Instagram DM' },
    { id: 'ORD-889', customer: 'Bilal Retailers', items: '4x Bulk Granola Bags', total: 110, advance: 50, due: 60, status: 'Pending Due', channel: 'Phone Call' },
  ]);

  // Inventory state
  const [inventory, setInventory] = useState([
    { id: 'SKU-01', name: 'Single Origin Arabica Beans', stock: 42, unit: 'kg', cost: 16, price: 28, status: 'In Stock' },
    { id: 'SKU-02', name: 'Artisan Sourdough Mix', stock: 6, unit: 'bags', cost: 7, price: 15, status: 'Low Stock' },
    { id: 'SKU-03', name: 'Pure Raw Honey (500g)', stock: 28, unit: 'jars', cost: 8, price: 18, status: 'In Stock' },
    { id: 'SKU-04', name: 'Eco Kraft Packaging Box (M)', stock: 5, unit: 'packs', cost: 12, price: 22, status: 'Low Stock' },
    { id: 'SKU-05', name: 'Cold Brew Filter Pouches', stock: 65, unit: 'units', cost: 3, price: 9, status: 'In Stock' },
  ]);

  // AI Message Parser demo state
  const sampleMessages = [
    "Hi Ledger! Need 2 boxes of Single Origin Arabica and 1 Raw Honey Jar delivered to 24 Elm Street tomorrow afternoon. Paid $74 via bank transfer. Customer: Aamina Raza",
    "Hey please pack 4 Organic Sourdough loaves for pickup at 5pm. Bill is $48, will pay cash upon collection. Name: Omar Siddiqui",
    "Salam! We need 3 packs of Eco Kraft Packaging and 2 Arabica Beans for Horizon Bistro, Total $122. Advance $60 paid, rest $62 on arrival."
  ];
  const [messageInput, setMessageInput] = useState(sampleMessages[0]);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedResult, setParsedResult] = useState<{
    customer: string;
    items: string[];
    total: number;
    advance: number;
    due: number;
    address: string;
    parsed: boolean;
  } | null>({
    customer: 'Aamina Raza',
    items: ['2x Single Origin Arabica ($56)', '1x Raw Honey Jar ($18)'],
    total: 74,
    advance: 74,
    due: 0,
    address: '24 Elm Street',
    parsed: true
  });
  const [parserSuccessNotice, setParserSuccessNotice] = useState(false);

  const handleParseMessage = (text: string) => {
    setIsParsing(true);
    setParserSuccessNotice(false);

    setTimeout(() => {
      if (text.toLowerCase().includes('omar')) {
        setParsedResult({
          customer: 'Omar Siddiqui',
          items: ['4x Organic Sourdough loaves ($48)'],
          total: 48,
          advance: 0,
          due: 48,
          address: 'Store Pickup at 5:00 PM',
          parsed: true
        });
      } else if (text.toLowerCase().includes('horizon') || text.toLowerCase().includes('bistro')) {
        setParsedResult({
          customer: 'Horizon Bistro',
          items: ['3x Eco Kraft Packaging ($66)', '2x Arabica Beans ($56)'],
          total: 122,
          advance: 60,
          due: 62,
          address: 'Horizon Bistro Commercial Bay',
          parsed: true
        });
      } else {
        setParsedResult({
          customer: 'Aamina Raza',
          items: ['2x Single Origin Arabica ($56)', '1x Raw Honey Jar ($18)'],
          total: 74,
          advance: 74,
          due: 0,
          address: '24 Elm Street',
          parsed: true
        });
      }
      setIsParsing(false);
      setParserSuccessNotice(true);
    }, 450);
  };

  const handleAddParsedToOrders = () => {
    if (!parsedResult) return;
    const newOrd = {
      id: `ORD-${Math.floor(893 + Math.random() * 50)}`,
      customer: parsedResult.customer,
      items: parsedResult.items.join(', '),
      total: parsedResult.total,
      advance: parsedResult.advance,
      due: parsedResult.due,
      status: parsedResult.due > 0 ? 'Pending Due' : 'Ready for Dispatch',
      channel: 'AI Message Parser'
    };
    setOrders([newOrd, ...orders]);
    setActiveTab('orders');
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-zinc-200/90 shadow-xl overflow-hidden font-sans text-zinc-900">
      {/* Top Browser/Window Header */}
      <div className="bg-zinc-900 text-white px-4 py-3 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-[1px] bg-zinc-700 mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-[11px] font-bold text-zinc-950">
              L
            </div>
            <span className="text-xs font-semibold tracking-wide text-zinc-200">Ledger Workspace</span>
            <span className="text-[10px] bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 px-2 py-0.5 rounded-full">
              Live Preview
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="hidden md:inline">Business: <strong>Artisan Roastery & Bakehouse</strong></span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-medium text-[11px]">Synced</span>
        </div>
      </div>

      {/* Software Navigation Bar */}
      <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'sales'
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            Sales
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Orders & Cash Flow
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'inventory'
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            Inventory
          </button>
          <button
            onClick={() => setActiveTab('ai-parser')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ai-parser'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            AI Message Parser
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500 hidden lg:inline">Today: Oct 14</span>
          <button
            onClick={() => {
              const newSale = {
                id: `INV-${Math.floor(4092 + Math.random() * 20)}`,
                item: 'Pour-over Single Blend',
                customer: 'Walk-in Guest',
                amount: 18,
                cost: 6,
                profit: 12,
                time: 'Just now',
                status: 'Completed'
              };
              setSalesList([newSale, ...salesList]);
              setActiveTab('sales');
            }}
            className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-1 transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Quick Sale</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 bg-zinc-50/50 min-h-[380px]">
        {/* 1. DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between text-zinc-500 text-xs mb-1">
                  <span>Today Revenue</span>
                  <span className="flex items-center text-emerald-600 font-semibold text-[11px]">
                    <ArrowUpRight className="w-3 h-3" /> +14.2%
                  </span>
                </div>
                <div className="text-xl font-bold tracking-tight text-zinc-900">$1,420.00</div>
                <div className="text-[11px] text-zinc-500 mt-1">28 transactions today</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between text-zinc-500 text-xs mb-1">
                  <span>Daily Costs</span>
                  <span className="text-zinc-400 text-[11px]">COGS + Ops</span>
                </div>
                <div className="text-xl font-bold tracking-tight text-zinc-900">$590.00</div>
                <div className="text-[11px] text-zinc-500 mt-1">Direct item expenses</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-300/80 bg-gradient-to-br from-white to-emerald-50/40 shadow-xs">
                <div className="flex items-center justify-between text-emerald-800 text-xs mb-1">
                  <span className="font-semibold">Net Profit</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    58.4% margin
                  </span>
                </div>
                <div className="text-xl font-bold tracking-tight text-emerald-900">$830.00</div>
                <div className="text-[11px] text-emerald-700 mt-1">Real earnings in pocket</div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between text-zinc-500 text-xs mb-1">
                  <span>Cash Flow</span>
                  <span className="text-emerald-600 text-[11px] font-medium">Safe</span>
                </div>
                <div className="text-xl font-bold tracking-tight text-zinc-900">$4,850.00</div>
                <div className="text-[11px] text-amber-600 mt-1">$230 pending in dues</div>
              </div>
            </div>

            {/* Split row: Recent Sales Activity & Inventory Health */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Sales Activity */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 p-4 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Live Sales Feed & Margin Calculation
                  </h4>
                  <button
                    onClick={() => setActiveTab('sales')}
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    View all sales →
                  </button>
                </div>

                <div className="space-y-2">
                  {salesList.slice(0, 3).map((sale) => (
                    <div
                      key={sale.id}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-100/60 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                          $
                        </div>
                        <div>
                          <div className="font-semibold text-zinc-900">{sale.item}</div>
                          <div className="text-[11px] text-zinc-500">
                            {sale.customer} • {sale.time}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-zinc-900">+${sale.amount}.00</div>
                        <div className="text-[10px] text-emerald-600 font-medium">
                          Net Profit: +${sale.profit}.00
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory & Cash Snapshot */}
              <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-xs flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Action Items
                  </h4>
                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-amber-900">2 Items Low in Stock</div>
                        <div className="text-[11px] text-amber-700">
                          Sourdough Mix (6 bags) & Kraft Box (5 packs).
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-emerald-900">AI Order Extractor</div>
                        <div className="text-[11px] text-emerald-700">
                          1 message parsed and ready to convert to order.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('ai-parser')}
                  className="mt-3 w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Try AI Message Parser
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. SALES TAB */}
        {activeTab === 'sales' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">Sales Records & Automated Profit</h3>
                <p className="text-xs text-zinc-500">Every sale automatically deducts costs and computes exact profit.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-zinc-200/80 px-2.5 py-1 rounded-md text-zinc-700 font-medium">
                  Total Today: $1,420
                </span>
                <span className="text-xs bg-emerald-100 px-2.5 py-1 rounded-md text-emerald-800 font-bold">
                  Profit: $830 (58.4%)
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-100 text-zinc-600 border-b border-zinc-200">
                    <tr>
                      <th className="py-2.5 px-3.5 font-semibold">Invoice #</th>
                      <th className="py-2.5 px-3.5 font-semibold">Item & Service</th>
                      <th className="py-2.5 px-3.5 font-semibold">Customer</th>
                      <th className="py-2.5 px-3.5 font-semibold text-right">Selling Price</th>
                      <th className="py-2.5 px-3.5 font-semibold text-right">Cost</th>
                      <th className="py-2.5 px-3.5 font-semibold text-right text-emerald-700">Net Profit</th>
                      <th className="py-2.5 px-3.5 font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {salesList.map((sale) => (
                      <tr key={sale.id} className="hover:bg-zinc-50 transition-colors">
                        <td className="py-2.5 px-3.5 font-mono text-[11px] text-zinc-500">{sale.id}</td>
                        <td className="py-2.5 px-3.5 font-medium text-zinc-900">{sale.item}</td>
                        <td className="py-2.5 px-3.5 text-zinc-600">{sale.customer}</td>
                        <td className="py-2.5 px-3.5 text-right font-semibold text-zinc-900">${sale.amount}.00</td>
                        <td className="py-2.5 px-3.5 text-right text-zinc-500">${sale.cost}.00</td>
                        <td className="py-2.5 px-3.5 text-right font-bold text-emerald-600">+${sale.profit}.00</td>
                        <td className="py-2.5 px-3.5 text-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {sale.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. ORDERS & CASH FLOW TAB */}
        {activeTab === 'orders' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-xs">
                <div className="text-xs text-zinc-500">Collected Advance</div>
                <div className="text-lg font-bold text-zinc-900 mt-0.5">$3,420.00</div>
                <div className="text-[10px] text-emerald-600">Already in cash register</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-200 bg-amber-50/20 shadow-xs">
                <div className="text-xs text-amber-800 font-semibold">Pending Dues Owed</div>
                <div className="text-lg font-bold text-amber-900 mt-0.5">$292.00</div>
                <div className="text-[10px] text-amber-700">3 customer orders pending payment</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-xs">
                <div className="text-xs text-zinc-500">Orders Dispatched</div>
                <div className="text-lg font-bold text-zinc-900 mt-0.5">38 orders</div>
                <div className="text-[10px] text-zinc-500">98% fulfillment on time</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-xs">
              <div className="p-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-700">Orders & Payment Status</span>
                <span className="text-xs text-zinc-500">Tracking advances & dues</span>
              </div>
              <div className="divide-y divide-zinc-100">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-3 hover:bg-zinc-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-zinc-500 text-[11px]">{ord.id}</span>
                        <span className="font-bold text-zinc-900">{ord.customer}</span>
                        <span className="text-[10px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded border border-zinc-200">
                          {ord.channel}
                        </span>
                      </div>
                      <div className="text-zinc-600 text-[11px]">{ord.items}</div>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <div className="font-bold text-zinc-900">${ord.total}.00</div>
                        <div className="text-[10px] text-zinc-500">
                          Adv: ${ord.advance} | <span className={ord.due > 0 ? 'text-amber-600 font-bold' : 'text-emerald-600'}>Due: ${ord.due}</span>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        ord.due === 0
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {ord.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. INVENTORY TAB */}
        {activeTab === 'inventory' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">Stock & Inventory Management</h3>
                <p className="text-xs text-zinc-500">Quickly monitor stock counts and identify items needing attention.</p>
              </div>
              <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg font-semibold">
                ⚠️ 2 Low Stock Warnings
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {inventory.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 bg-white rounded-xl border transition-all ${
                    item.status === 'Low Stock'
                      ? 'border-amber-300 bg-amber-50/10'
                      : 'border-zinc-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400">{item.id}</span>
                      <h4 className="text-xs font-bold text-zinc-900 mt-0.5">{item.name}</h4>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      item.status === 'Low Stock'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-zinc-500 text-[11px]">Stock Level: </span>
                      <strong className={item.status === 'Low Stock' ? 'text-amber-600' : 'text-zinc-900'}>
                        {item.stock} {item.unit}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 text-[10px]">Cost: ${item.cost}</span>
                      <div className="font-semibold text-emerald-600">Sell: ${item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. AI MESSAGE PARSER TAB */}
        {activeTab === 'ai-parser' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-emerald-900 text-white p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                AI-Powered Message Parser
              </div>
              <h3 className="text-base font-bold">Turn Customer Chat Messages into Structured Orders</h3>
              <p className="text-xs text-emerald-100/90 mt-1 max-w-2xl">
                Small businesses take orders over WhatsApp, Instagram DMs, or SMS. Ledger extracts the customer name, items, quantities, delivery address, and payments automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Message Input Side */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-800">Raw Customer Message</span>
                  <span className="text-zinc-500">Pick a sample:</span>
                </div>

                {/* Sample Pills */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => {
                      setMessageInput(sampleMessages[0]);
                      handleParseMessage(sampleMessages[0]);
                    }}
                    className="text-[11px] bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-2 py-1 rounded transition-colors"
                  >
                    Sample 1: Delivery Order
                  </button>
                  <button
                    onClick={() => {
                      setMessageInput(sampleMessages[1]);
                      handleParseMessage(sampleMessages[1]);
                    }}
                    className="text-[11px] bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-2 py-1 rounded transition-colors"
                  >
                    Sample 2: Store Pickup
                  </button>
                  <button
                    onClick={() => {
                      setMessageInput(sampleMessages[2]);
                      handleParseMessage(sampleMessages[2]);
                    }}
                    className="text-[11px] bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-2 py-1 rounded transition-colors"
                  >
                    Sample 3: Advance + Due
                  </button>
                </div>

                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  rows={4}
                  className="w-full text-xs p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-zinc-800 font-sans"
                  placeholder="Paste any WhatsApp or chat message here..."
                />

                <button
                  onClick={() => handleParseMessage(messageInput)}
                  disabled={isParsing || !messageInput.trim()}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  {isParsing ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Parsing message details...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      Parse Message with AI
                    </>
                  )}
                </button>
              </div>

              {/* Parsed Result Side */}
              <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-100">
                    <span className="font-bold text-zinc-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Extracted Order Card
                    </span>
                    {parserSuccessNotice && (
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                        Instant Extraction
                      </span>
                    )}
                  </div>

                  {parsedResult ? (
                    <div className="mt-3 space-y-2.5 text-xs">
                      <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                        <span className="text-zinc-500 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-zinc-400" /> Customer:
                        </span>
                        <span className="font-bold text-zinc-900">{parsedResult.customer}</span>
                      </div>

                      <div className="p-2 bg-zinc-50 rounded-lg">
                        <span className="text-zinc-500 block mb-1">Ordered Items:</span>
                        <div className="space-y-1">
                          {parsedResult.items.map((item, idx) => (
                            <div key={idx} className="font-semibold text-zinc-800 pl-2 border-l-2 border-emerald-500">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                        <span className="text-zinc-500 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Location:
                        </span>
                        <span className="font-medium text-zinc-700">{parsedResult.address}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-2 bg-zinc-100 rounded-lg">
                          <div className="text-[10px] text-zinc-500">Total</div>
                          <div className="font-bold text-zinc-900">${parsedResult.total}.00</div>
                        </div>
                        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                          <div className="text-[10px]">Advance</div>
                          <div className="font-bold">${parsedResult.advance}.00</div>
                        </div>
                        <div className={`p-2 rounded-lg ${parsedResult.due > 0 ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-zinc-100 text-zinc-600'}`}>
                          <div className="text-[10px]">Pending Due</div>
                          <div className="font-bold">${parsedResult.due}.00</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center text-zinc-400 text-xs">
                      Enter a message and click "Parse Message with AI"
                    </div>
                  )}
                </div>

                {parsedResult && (
                  <button
                    onClick={handleAddParsedToOrders}
                    className="mt-4 w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Confirm & Save to Orders
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer bar of the software */}
      <div className="bg-white border-t border-zinc-200 px-4 py-2.5 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Ledger v2.4 • Smart micro-accounting for small business</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Zero accounting jargon</span>
          <span className="text-zinc-300">•</span>
          <span className="text-emerald-600 font-medium">Automatic Profit Engine</span>
        </div>
      </div>
    </div>
  );
};
