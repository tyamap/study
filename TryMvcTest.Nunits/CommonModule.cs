using NUnit.Framework;
using System.Reflection;

internal static class CommonModule
{
    static public object PrivateMethodInvoke(object testClass, string methodName, object[] parameters)
    {
        if (string.IsNullOrWhiteSpace(methodName))
            Assert.Fail("No Name");

        MethodInfo method = testClass.GetType().GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);

        if (method == null)
            Assert.Fail(string.Format("{0} is not found", methodName));

        try
        {
            return method.Invoke(testClass, parameters);
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException;
        }
    }
}