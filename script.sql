USE [CourierCompany]
GO
/****** Object:  Table [dbo].[Coment]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Coment](
	[ResponseId] [int] NOT NULL,
	[FullName] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Response] [nvarchar](50) NULL,
 CONSTRAINT [PK_Coment] PRIMARY KEY CLUSTERED 
(
	[ResponseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Contact]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[FullName] [nvarchar](50) NOT NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[TheCauseOfReferral] [nvarchar](50) NULL,
 CONSTRAINT [PK_Contact] PRIMARY KEY CLUSTERED 
(
	[FullName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CourierPackage]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourierPackage](
	[CourierId] [nvarchar](50) NOT NULL,
	[CourierPackageId] [int] NULL,
	[PackageId] [int] NULL,
	[DateCollect] [date] NULL,
	[DateBring] [date] NULL,
	[DateNow] [date] NULL,
 CONSTRAINT [PK_CourierPackage] PRIMARY KEY CLUSTERED 
(
	[CourierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Couriers]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Couriers](
	[CourierId] [nvarchar](50) NOT NULL,
	[PersonalCode] [nvarchar](50) NULL,
	[CourierTz] [nvarchar](50) NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[City] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[Status] [int] NULL,
	[TypeOfTransport] [int] NULL,
 CONSTRAINT [PK_Couriers] PRIMARY KEY CLUSTERED 
(
	[CourierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CouriersComments]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CouriersComments](
	[ResponseId] [int] NOT NULL,
	[FullName] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Response] [nvarchar](50) NULL,
	[CourierId] [int] NULL,
 CONSTRAINT [PK_CouriersComments] PRIMARY KEY CLUSTERED 
(
	[ResponseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Customers]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerId] [int] NOT NULL,
	[CustomerPersonalCode] [nvarchar](50) NULL,
	[CustomerTz] [nvarchar](50) NULL,
	[CustomerFirstName] [nvarchar](50) NULL,
	[CustomerLastName] [nvarchar](50) NULL,
	[CustomerAddress] [nvarchar](50) NULL,
	[CustomerCity] [nvarchar](50) NULL,
	[CustomerPhone] [nvarchar](50) NULL,
	[CustomerStatus] [int] NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[MadeShipments]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MadeShipments](
	[PackageId] [int] NOT NULL,
	[CustomerId] [nvarchar](50) NULL,
	[CollectionAddress] [nvarchar](50) NULL,
	[Cfloor] [int] NULL,
	[Destination] [nvarchar](50) NULL,
	[Dfloor] [int] NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[SenderPhone] [nvarchar](50) NULL,
	[InvoiceName] [nvarchar](50) NULL,
	[PhoneReceivesShipping] [nvarchar](50) NULL,
	[CompanyName] [nvarchar](50) NULL,
	[FullName] [nvarchar](50) NULL,
	[DuringSending] [nvarchar](50) NULL,
	[Weigth] [nvarchar](50) NULL,
	[DateNow] [date] NULL,
	[Description] [nvarchar](50) NULL,
	[Commends] [nvarchar](50) NULL,
	[Status] [nvarchar](50) NULL,
 CONSTRAINT [PK_MadeShipments] PRIMARY KEY CLUSTERED 
(
	[PackageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PackageAddress]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PackageAddress](
	[IdAddress] [int] NOT NULL,
	[IdPackage] [int] NULL,
	[SourcePackageLon] [int] NULL,
	[SourcePackageLat] [int] NULL,
	[DestinetionPackageLon] [int] NULL,
	[DestinationPackageLat] [int] NULL,
 CONSTRAINT [PK_PackageAddress] PRIMARY KEY CLUSTERED 
(
	[IdAddress] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Packages]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Packages](
	[PackageId] [int] NOT NULL,
	[CollectionAddress] [nvarchar](50) NULL,
	[Cfloor] [int] NULL,
	[Destination] [nvarchar](50) NULL,
	[Dfloor] [int] NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[SenderPhone] [nvarchar](50) NULL,
	[InvoiceName] [nvarchar](50) NULL,
	[PhoneReceivesShippingPac] [nvarchar](50) NULL,
	[CompanyName] [nvarchar](50) NULL,
	[FullName] [nvarchar](50) NULL,
	[DuringSending] [nvarchar](50) NULL,
	[Weigth] [int] NULL,
	[DateNow] [date] NULL,
	[Description] [nvarchar](50) NULL,
	[CommendsPac] [nvarchar](50) NULL,
	[Status] [nvarchar](50) NULL,
 CONSTRAINT [PK_Packages] PRIMARY KEY CLUSTERED 
(
	[PackageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PackagesToCouriers]    Script Date: 26/11/2020 18:39:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PackagesToCouriers](
	[CourierCode] [nvarchar](50) NULL,
	[PackageCode] [nvarchar](50) NULL
) ON [PRIMARY]

GO
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (211584544, N'יהודה', N'0558989874', N'Y78787@gmail.com', N'למהר')
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (211898777, N'נרקיס שלום', N'0504987548', N'N12@gmail.com', N'המשלוח לא הגיעה')
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (256987474, N'חיים נהרי', N'0548974514', N'C4454@gmail.com', N'שביר')
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (656544432, N'עדי בוזגלו', N'0589547121', N'A565@gmail.com', N'נחוץ לי מאוד להביאי זריז')
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (765645433, N'יקיר אדרי', N'0549878777', N'Y45@gmail.com', N'שביר')
INSERT [dbo].[Coment] ([ResponseId], [FullName], [Phone], [Email], [Response]) VALUES (878655544, N'נחמן חיימוביץ', N'0549666687', N'N666@gmail.com', N'תודה רבה!')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'גדי פולק', N'0548897877', N'G4567@gmail.com', N'iuiuuht')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'דני לוי', N'0529874451', N'D65654@gmail.com', N'plpoohuy')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'טוביה בטיטו', N'0528635220', N'T900@gmail.com', N'ccvvvv')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'יאיר קפלן', N'0589587487', N'Y4554@gmail.com', N'jhjghghg')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'יהודה זבולוני', N'0567654532', N'Y123@gmail.com', NULL)
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'כלב בוסקילה', N'0524874111', N'C5656@gmail.com', N'jhjghlll')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'לוי יחזקאל', N'0548978787', N'L7676@gmail.com', N'jghghg')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'נרקיס שליו', N'0528784545', N'N676@gmail.com', N'gfgfgfgfg')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'עובדיה חזיזיה', N'0526669871', N'O6666@gmail.com', N'khjhjhjh')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'רבקה בוזגלו', N'0548974141', N'R2211@gmail.com', N'jbjmb')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'רוני ידידיה', N'0548987412', N'R7676@gmail.com', N'hfgfghf')
INSERT [dbo].[Contact] ([FullName], [Phone], [Email], [TheCauseOfReferral]) VALUES (N'שושנה לוי', N'0504169898', N'S333@gmail.com', N'uyugygh')
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'138888899', 878445, 5454544, CAST(N'2019-01-01' AS Date), CAST(N'2019-08-08' AS Date), CAST(N'2020-09-09' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'155558464', 127878, 9898666, CAST(N'2020-05-08' AS Date), CAST(N'2020-05-11' AS Date), CAST(N'2020-09-12' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'414178783', 212177, 8888888, CAST(N'2020-06-01' AS Date), CAST(N'2020-07-29' AS Date), CAST(N'2020-09-09' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'417174898', 774414, 1111474, CAST(N'2020-04-05' AS Date), CAST(N'2020-05-06' AS Date), CAST(N'2020-06-07' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'454848441', 232665, 9898541, CAST(N'2020-05-04' AS Date), CAST(N'2020-09-10' AS Date), CAST(N'2020-11-12' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'478788455', 125856, 5645456, CAST(N'2018-05-05' AS Date), CAST(N'2018-08-09' AS Date), CAST(N'2018-07-10' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'514789555', 87878, 74747, CAST(N'2020-08-04' AS Date), CAST(N'2020-11-03' AS Date), CAST(N'2020-10-22' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'545488771', 393696, 8987784, CAST(N'2018-01-01' AS Date), CAST(N'2018-04-08' AS Date), CAST(N'2018-05-12' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'848484777', 787454, 1245477, CAST(N'2019-08-03' AS Date), CAST(N'2019-09-09' AS Date), CAST(N'2019-12-03' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'874512122', 69666, 212548, CAST(N'2020-07-03' AS Date), CAST(N'2020-12-01' AS Date), CAST(N'2020-11-23' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'878445445', 689595, 1214544, CAST(N'2020-03-01' AS Date), CAST(N'2020-04-04' AS Date), CAST(N'2020-07-07' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'878745441', 484454, 8787874, CAST(N'2020-07-07' AS Date), CAST(N'2020-08-09' AS Date), CAST(N'2020-09-11' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'878745545', 12121, 5252525, CAST(N'2019-05-04' AS Date), CAST(N'2019-06-25' AS Date), CAST(N'2019-12-12' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'879784555', 878784, 9898787, CAST(N'2020-09-10' AS Date), CAST(N'2020-10-11' AS Date), CAST(N'2020-11-11' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'887745441', 878745, 3212155, CAST(N'2019-08-09' AS Date), CAST(N'2019-09-10' AS Date), CAST(N'2019-10-10' AS Date))
INSERT [dbo].[CourierPackage] ([CourierId], [CourierPackageId], [PackageId], [DateCollect], [DateBring], [DateNow]) VALUES (N'989845454', 548787, 8784544, CAST(N'2017-01-01' AS Date), CAST(N'2017-01-09' AS Date), CAST(N'2017-05-11' AS Date))
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'1', N'4545', N'211592158', N'מיכל', N'שלום', N'בן גוריון 76', N'ירושלים', N'0542987471', 1, 2)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'10', N'87874', N'211188787', N'עקיבא', N'דניאל', N'הפועלים 76', N'ירושלים', N'0527845454', 2, 1)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'2', N'48785', N'211598674', N'לוי', N'פרטוש', N'יהודה הנשיאי 9', N'בני ברק', N'0526987714', 2, 2)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'3', N'87845', N'211598742', N'מיכאל', N'כוכבי', N'בורוכוב 6', N'אור עקיבא', N'0548787411', 1, 1)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'4', N'21211', N'259874744', N'זוארי', N'גיאי', N'הארנוביץ 88', N'אשדוד', N'0524878454', 2, 3)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'5', N'87874', N'211545878', N'זאב', N'רווח', N'לנדא 1', N'בני ברק', N'5454548774', 1, 1)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'6', N'54545', N'211587441', N'רובי', N'גל', N'ברקוביץ 98', N'בת ים', N'0529787845', 3, 2)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'7', N'87845', N'211587454', N'קובי', N'אפללו', N'ברקוביץ 54', N'ירושלים', N'0528747474', 2, 1)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'8', N'87845', N'211875414', N'יעקב', N'בוסקילה', N'נרקיס 4', N'בני ברק', N'0542187874', 3, 3)
INSERT [dbo].[Couriers] ([CourierId], [PersonalCode], [CourierTz], [FirstName], [LastName], [Address], [City], [Phone], [Status], [TypeOfTransport]) VALUES (N'9', N'78776', N'211587548', N'בני', N'גולדשטיין', N'הנרקיסים 8', N'רמת גן', N'0548897844', 1, 2)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (222222, N'נריה', N'חיימוביץ', N'N666@gmail.com', N'יווווווווואוווווווו אתם מקסימים', 211589757)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (457874, N'עדי שלום', N'0529887877', N'A111@gmail.com', N'מתיקות', 211895476)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (512878, N'יהודה פרץ', N'0529874111', N'Y78787@gmail.com', N'התאכזבתי', 211854798)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (548745, N'עובדיה חממי', N'0548989877', N'O888@gmail.com', N'תודה', 211895898)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (548754, N'מיכאל לוי', N'0504168987', N'M123@gmail.com', N'תודה רבה', 215498845)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (787845, N'מתן', N'שליו', N'M555@gmail.com', N'תודה רבה', 211895895)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (875454, N'חיים בלוי', N'0542987544', N'C676@gmail.com', N'אין עליכם', 211895474)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (878745, N'טוביה ברקוביץ', N'0524874541', N'T666@gmail.com', N'שלמות של שירות', 211895746)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (898887, N'רוני', N'שימעוני', N'R787@gmail.com', N'אין בשום מקום כזה שרות', 211589745)
INSERT [dbo].[CouriersComments] ([ResponseId], [FullName], [Phone], [Email], [Response], [CourierId]) VALUES (978747, N'ניתאי', N'ארבלי', N'N5654@gmail.com', N'ממש תודה', 211895784)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (1, N'878754', N'211589745', N'מיכאל', N'כהן', N'בן גוריון 7', N'בני ברק', N'0548975478', 1)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (2, N'875454', N'211857454', N'מירי', N'תם', N'בן דוד 6', N'ירושלים', N'0528974541', 2)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (3, N'585457', N'211545877', N'חיים', N'שלום', N'שבזי 56', N'אור עקיבא', N'0549897454', 1)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (4, N'878454', N'211857447', N'טוביה', N'שבזי', N'חשמונאים 6', N'אשדוד', N'0529878741', 3)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (5, N'845445', N'211857447', N'רוני', N'בוזגלו', N'עובדיה 5', N'תל אביב', N'0548974544', 2)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (6, N'213212', N'211854721', N'קובי', N'פרץ', N'כלב 6', N'ירושלים', N'0524874141', 1)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (7, N'897787', N'211874544', N'ישראל', N'ידעי', N'טוביה 89', N'בני ברק', N'0548974544', 3)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (8, N'787874', N'211857498', N'דוב', N'דניאלוב', N'קרפטים 7', N'בני ברק', N'0527844417', 2)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (9, N'545471', N'211895744', N'דן', N'אברבנאל', N'הטירונים 68', N'ירושלים', N'0548745498', 1)
INSERT [dbo].[Customers] ([CustomerId], [CustomerPersonalCode], [CustomerTz], [CustomerFirstName], [CustomerLastName], [CustomerAddress], [CustomerCity], [CustomerPhone], [CustomerStatus]) VALUES (10, N'988787', N'211598785', N'דניאל', N'שימעוני', N'עוזיאל 8', NULL, NULL, NULL)
INSERT [dbo].[MadeShipments] ([PackageId], [CustomerId], [CollectionAddress], [Cfloor], [Destination], [Dfloor], [FirstName], [LastName], [Email], [SenderPhone], [InvoiceName], [PhoneReceivesShipping], [CompanyName], [FullName], [DuringSending], [Weigth], [DateNow], [Description], [Commends], [Status]) VALUES (1, N'211589742', N'בן גוריון 7', 3, N'בן יעקב 4', 3, N'מיכל', N'כהנוביץ', N'M786@gmail.com', N'0504187954', N'גדי', N'0548974541', N'"הפועלים"', N'חיים לוי', N'3 שעות', N'5 קילו', CAST(N'2020-05-01' AS Date), N'חבילה כבדה מאוד', N'תודה רבה', N'1')
INSERT [dbo].[MadeShipments] ([PackageId], [CustomerId], [CollectionAddress], [Cfloor], [Destination], [Dfloor], [FirstName], [LastName], [Email], [SenderPhone], [InvoiceName], [PhoneReceivesShipping], [CompanyName], [FullName], [DuringSending], [Weigth], [DateNow], [Description], [Commends], [Status]) VALUES (2, N'211582412', N'בן יעקב 4', 2, N'בן דוד 3', 2, N'מיכאל', N'דניאל', N'W233@gmail.com', N'0548978787', N'יובל', N'0524187414', N'"המעפילים"', N'טוביה ברקוביץ', N'5 שעות', N'2 קילו', CAST(N'2019-08-05' AS Date), N'שביר', N'שביר', N'3')
INSERT [dbo].[MadeShipments] ([PackageId], [CustomerId], [CollectionAddress], [Cfloor], [Destination], [Dfloor], [FirstName], [LastName], [Email], [SenderPhone], [InvoiceName], [PhoneReceivesShipping], [CompanyName], [FullName], [DuringSending], [Weigth], [DateNow], [Description], [Commends], [Status]) VALUES (3, N'211858747', N'רבי עקיבא 78', 6, N'ריינס 8', 1, N'חיים', N'לוי', N'E43@gmail.com', N'0548977844', N'יהודה', N'0549897778', N'"גולדין"', N'רוני פרץ', N'8 שעות', N'4 קילו', CAST(N'2020-09-11' AS Date), N'עדין מאוד', N'כדאי שיגיעה זריז', N'2')
INSERT [dbo].[PackageAddress] ([IdAddress], [IdPackage], [SourcePackageLon], [SourcePackageLat], [DestinetionPackageLon], [DestinationPackageLat]) VALUES (125, 233, 6, 4, 1, 2)
INSERT [dbo].[PackageAddress] ([IdAddress], [IdPackage], [SourcePackageLon], [SourcePackageLat], [DestinetionPackageLon], [DestinationPackageLat]) VALUES (176, 876, 3, 2, 3, 1)
INSERT [dbo].[PackageAddress] ([IdAddress], [IdPackage], [SourcePackageLon], [SourcePackageLat], [DestinetionPackageLon], [DestinationPackageLat]) VALUES (4544, 885, 1, 5, 2, 8)
INSERT [dbo].[PackageAddress] ([IdAddress], [IdPackage], [SourcePackageLon], [SourcePackageLat], [DestinetionPackageLon], [DestinationPackageLat]) VALUES (8744, 661, 5, 7, 1, 6)
INSERT [dbo].[PackageAddress] ([IdAddress], [IdPackage], [SourcePackageLon], [SourcePackageLat], [DestinetionPackageLon], [DestinationPackageLat]) VALUES (8787, 541, 4, 8, 4, 7)
