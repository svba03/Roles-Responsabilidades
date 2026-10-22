import React, { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, 
  LayoutDashboard, List, Search, QrCode, ShieldCheck, 
  User, Bell, Menu, X, ChevronDown
} from 'lucide-react';

const BRAND_GREEN = "#c3f53b"; 
const BRAND_GREEN_HOVER = "#a8d62b";

const LoginScreen = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('cristian.penaloza@ab-inbev.com');
  const [password, setPassword] = useState('AA39022928');
  const [activeTab, setActiveTab] = useState('ingresar');
  const [isFocused, setIsFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="bg-white rounded-2xl p-8 sm:p-12 w-full max-w-md shadow-sm border border-slate-100">
        
        {/* Cabecera */}
        <div className="mb-8">
          <p className="text-xs font-bold text-slate-400 tracking-wider mb-2">BIENVENIDO A LENT360</p>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2 tracking-tight">Continúa aprendiendo</h1>
          <p className="text-sm text-slate-500">Ingresa con tu correo corporativo.</p>
        </div>

        {/* Pestañas */}
        <div className="flex border-b border-slate-200 mb-6 relative">
          <button 
            className={`flex-1 pb-3 text-sm font-semibold transition-colors ${activeTab === 'ingresar' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
            onClick={() => setActiveTab('ingresar')}
          >
            Ingresar
          </button>
          <button 
            className={`flex-1 pb-3 text-sm font-semibold transition-colors ${activeTab === 'crear' ? 'text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
            onClick={() => setActiveTab('crear')}
          >
            Crear cuenta
          </button>
          <div 
            className="absolute bottom-0 h-0.5 bg-[#a8d62b] transition-all duration-300"
            style={{ 
              width: '50%', 
              left: activeTab === 'ingresar' ? '0' : '50%' 
            }}
          />
        </div>

        {}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Correo corporativo</label>
            <div className={`flex items-center bg-[#f8f9fa] border rounded-lg overflow-hidden transition-colors ${isFocused === 'email' ? 'border-[#a8d62b]' : 'border-slate-200'}`}>
              <div className="pl-3 text-slate-400">
                <Mail size={18} />
              </div>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused('')}
                className="w-full bg-transparent border-none py-3 px-3 text-sm text-slate-700 focus:outline-none"
                placeholder="ejemplo@empresa.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Contraseña</label>
            <div className={`flex items-center bg-[#f8f9fa] border rounded-lg overflow-hidden transition-colors ${isFocused === 'password' ? 'border-[#a8d62b]' : 'border-slate-200'}`}>
              <div className="pl-3 text-slate-400">
                <Lock size={18} />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused('password')}
                onBlur={() => setIsFocused('')}
                className="w-full bg-transparent border-none py-3 px-3 text-sm text-slate-700 focus:outline-none tracking-wide"
                placeholder="••••••••"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-6 py-3.5 rounded-lg flex items-center justify-center space-x-2 text-slate-800 font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            <span>Ingresar</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            ¿Necesitas ayuda? Contacta al equipo de RR. HH.
          </p>
        </div>
      </div>
    </div>
  );
};

const ViewDashboard = () => (
  <div className="p-6 animate-in fade-in zoom-in-95 duration-200">
    <h2 className="text-2xl font-bold text-slate-800 mb-6">Resumen Operativo</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {[
        { title: 'Usuarios Activos', value: '1,245', change: '+12%', color: 'border-l-blue-500' },
        { title: 'Códigos Generados', value: '892', change: '+5%', color: 'border-l-green-500' },
        { title: 'Alertas Pendientes', value: '14', change: '-2%', color: 'border-l-amber-500' },
      ].map((stat, i) => (
        <div key={i} className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm border-l-4 ${stat.color}`}>
          <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
          <div className="flex items-end space-x-2">
            <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
            <span className="text-sm font-medium text-green-600 mb-1">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 h-64 flex items-center justify-center">
      <p className="text-slate-400 flex items-center gap-2">
        <LayoutDashboard />
        Gráfico de actividad interactivo (Espacio reservado)
      </p>
    </div>
  </div>
);

const ViewLists = () => {
  const mockData = [
    { id: 'OP-1029', name: 'Mantenimiento Planta Norte', status: 'Completado', date: '2024-05-12' },
    { id: 'OP-1030', name: 'Revisión de Seguridad', status: 'En Progreso', date: '2024-05-14' },
    { id: 'OP-1031', name: 'Auditoría Trimestral', status: 'Pendiente', date: '2024-05-20' },
    { id: 'OP-1032', name: 'Actualización de Servidores', status: 'Completado', date: '2024-05-22' },
  ];

  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Listados Operativos</h2>
        <button className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
          Exportar CSV
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 text-slate-500 border-b border-slate-100 text-sm">
              <th className="p-4 font-semibold">ID Tarea</th>
              <th className="p-4 font-semibold">Descripción</th>
              <th className="p-4 font-semibold">Estado</th>
              <th className="p-4 font-semibold">Fecha Límite</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors text-sm text-slate-700">
                <td className="p-4 font-medium">{item.id}</td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Completado' ? 'bg-green-100 text-green-700' :
                    item.status === 'En Progreso' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-slate-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ViewQRGenerator = () => {
  const [qrContent, setQrContent] = useState('https://www.ejemplo.com/recurso');
  
  return (
    <div className="p-6 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Generador de Códigos QR</h2>
      <p className="text-slate-500 mb-8 text-sm">Crea códigos QR al instante para manuales, links o activos.</p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Contenido del QR</label>
            <textarea
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#c3f53b] focus:border-transparent outline-none h-32 resize-none"
              placeholder="Ingresa una URL, texto, número de serie..."
              value={qrContent}
              onChange={(e) => setQrContent(e.target.value)}
            ></textarea>
          </div>
          <button 
            onClick={() => setQrContent('')}
            className="bg-slate-800 text-white w-full py-3 rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors"
          >
            Limpiar Datos
          </button>
        </div>

        <div className="w-full md:w-80 bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-4">
            {qrContent ? (
               <img 
                 src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrContent)}`} 
                 alt="Código QR Generado"
                 className="w-48 h-48 mix-blend-multiply"
               />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center text-slate-300 bg-slate-100 rounded-md">
                <QrCode size={48} />
              </div>
            )}
          </div>
          <button 
            disabled={!qrContent}
            className="w-full border border-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            Descargar Imagen
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewPermissions = () => {
  const users = [
    { id: 1, name: 'Cristian Peñaloza', email: 'cristian.penaloza@ab-inbev.com', role: 'Administrador' },
    { id: 2, name: 'Ana Silva', email: 'ana.silva@ab-inbev.com', role: 'Editor' },
    { id: 3, name: 'Roberto Muñoz', email: 'rmunoz@ab-inbev.com', role: 'Lector' },
  ];

  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Gestión de Permisos</h2>
          <p className="text-slate-500 text-sm">Administra los accesos de los colaboradores a la plataforma.</p>
        </div>
        <button 
          className="px-4 py-2 rounded-lg text-slate-800 font-medium text-sm transition-colors hover:bg-opacity-80 whitespace-nowrap"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          + Invitar Usuario
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
              <th className="p-4 font-semibold">Usuario</th>
              <th className="p-4 font-semibold">Correo Electrónico</th>
              <th className="p-4 font-semibold">Nivel de Acceso</th>
              <th className="p-4 font-semibold text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-50 last:border-none hover:bg-slate-50 text-sm">
                <td className="p-4 font-medium text-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 shrink-0">
                    {user.name.charAt(0)}
                  </div>
                  <span className="truncate">{user.name}</span>
                </td>
                <td className="p-4 text-slate-500">{user.email}</td>
                <td className="p-4">
                  <select 
                    defaultValue={user.role}
                    className="bg-transparent border border-slate-200 text-slate-700 text-sm rounded focus:ring-[#c3f53b] focus:border-[#c3f53b] p-1.5 outline-none cursor-pointer"
                  >
                    <option>Administrador</option>
                    <option>Editor</option>
                    <option>Lector</option>
                  </select>
                </td>
                <td className="p-4 text-right">
                  <button className="text-red-500 hover:text-red-700 text-sm font-medium">Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DashboardLayout = ({ onLogout }) => {
  const [activeMenu, setActiveMenu] = useState('dashboards');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboards', label: 'Dashboards', icon: LayoutDashboard },
    { id: 'listas', label: 'Listas y Tareas', icon: List },
    { id: 'generador-qr', label: 'Generador QR', icon: QrCode },
    { id: 'permisos', label: 'Permisos', icon: ShieldCheck },
  ];

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboards': return <ViewDashboard />;
      case 'listas': return <ViewLists />;
      case 'generador-qr': return <ViewQRGenerator />;
      case 'permisos': return <ViewPermissions />;
      default: return <ViewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex overflow-hidden font-sans">
      
      {/* Sidebar Overlay (Móvil) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-800/50 z-20 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Barra Lateral (Sidebar) */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-white z-30 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <div className="font-bold tracking-widest text-[#c3f53b] text-xl">LENT360</div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">Menu Principal</p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setIsSidebarOpen(false); // Cierra menú en móviles al hacer clic
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-[#c3f53b] text-slate-900' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
           <button 
             onClick={onLogout}
             className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
           >
             <ArrowRight size={18} className="rotate-180" />
             <span>Cerrar Sesión</span>
           </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Barra Superior (Topbar) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 shadow-sm">
          <div className="flex items-center flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="mr-4 text-slate-500 hover:text-slate-700 md:hidden"
            >
              <Menu size={24} />
            </button>
            
            {/* Buscador Global */}
            <div className="max-w-md w-full hidden sm:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-transparent focus-within:border-[#c3f53b] focus-within:bg-white transition-colors">
              <Search size={18} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar recursos, listas o usuarios..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-slate-400 hover:text-slate-600 relative hidden sm:block">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2 pl-4 border-l border-slate-200 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-semibold text-slate-700 leading-none">Cristian P.</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>
        </header>

        {/* Área de Vistas Dinámicas */}
        <div className="flex-1 overflow-auto bg-[#f8fafc]">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <DashboardLayout onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}